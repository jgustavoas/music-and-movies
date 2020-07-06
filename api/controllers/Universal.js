var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const models = require('../models');

const ATTRIBUTES = require('../objects/attributes.obj');
const msg = require('../objects/messages.obj');
const useWhere = require('../functions/useWhere.func');

class UniversalControllers {
  async create(req, res, next) {
    const { MODEL } = req.params;

    try {
      await models[MODEL].create(req.body.data).then((row) => {
        res.status(200).json({ success: 'Ok', row });
      });
    } catch (error) {
      res.status(400).json({ erro: error });
    }
  }

  async read(req, res, next) {
    const { MODEL } = req.params;
    const { val, col, by, sort, offset, limit, ...rest } = req.query;
    const inc = ATTRIBUTES[MODEL].INCLUDE;

    const { OWN_COLUMNS, INCLUDE } = ATTRIBUTES[MODEL];
    const SORT = sort ? sort : 'ASC';

    const associatedModel = {};
    associatedModel.useWhere = false;

    // Clean up "where" clause of all associated models (see footer note #1):
    INCLUDE.forEach((include) => {
      include.where = null;
      include.required = false;
    });

    // Code block #1 ---------------------------------------------------------------------------------------------------
    Object.keys(ATTRIBUTES).forEach((model) => {
      if (ATTRIBUTES[model].OWN_COLUMNS.includes(by)) {
        associatedModel.by = [models[model], by, SORT];
      }
    });
    // end -------------------------------------------------------------------------------------------------------------

    Object.entries(rest).forEach((and) => {
      const [col, val] = and;
      useWhere(col, val, inc);
    });

    useWhere(col, val, inc);

    // Checking if the main model has the column indicated by the parameter "req.query.by":
    const BY = ATTRIBUTES[MODEL].OWN_COLUMNS.includes(by)
      ? [by, SORT]
      : associatedModel.by;

    const QUERY = {
      WHERE: val ? { [col ? col : by]: { [Op.iLike]: `%${val}%` } } : {},
      ORDER: by ? [BY] : null,
      OFFSET: offset ? offset : null,
      LIMIT: limit ? limit : null,
    };

    const { WHERE, ORDER, OFFSET, LIMIT } = QUERY;

    try {
      await models[MODEL].findAll({
        attributes: OWN_COLUMNS,
        include: INCLUDE,
        order: ORDER,
        where: associatedModel.useWhere ? {} : WHERE, // unset this property if searching with "where" in associated model.
        limit: LIMIT,
        offset: OFFSET,
      }).then((rows) => res.json(rows));
    } catch (err) {
      res.status(400).json({ erro: 'Something went wrong!' });
      throw err;
    }
  }

  async update(req, res, next) {
    const { MODEL } = req.params;
    const { id, ...data } = req.body;

    const { UPDATE_ok: ok, UPDATE_no: no } = msg;

    try {
      await models[MODEL].update(data, {
        where: { id },
      }).then((row) => res.json(row[0] > 0 ? { ok } : { no }));
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async delete(req, res, next) {
    const { MODEL } = req.params;
    const { id } = req.body;

    const { DELETE_ok: ok, DELETE_no: no } = msg;

    try {
      await models[MODEL].destroy({ where: { id } }).then((row) =>
        res.json(row > 0 ? { ok } : { no })
      );
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

module.exports = new UniversalControllers();

/*
  Code Block #1:
  Checking wich model has the column indicated by the parameter "req.query.by" to sort the table.

  Code Block #2:
  Finding if there is an associated model with the column indicated by the param "req.query.col".
  If so, the "where" clause in the SQL query will make reference to the column of that model (table).

  FOOTER NOTES:
    1) If the user has sent a request indicating a column that belongs to an associated model,...
       ...the property "where" for that associated model remains defined for the following requests,...
       ...even if no respective parameter is passed within new requests, because that property remains in memory.
       This clean-up unsets that property, preventing Sequelize to create an undesirable INNER JOIN with it.
*/
