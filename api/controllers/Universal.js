var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const models = require('../models');

const ATTRIBUTES = require('../objects/attributes.obj');
const msg = require('../objects/messages.obj');

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
    const { val, col, by, sort, offset, limit } = req.query;

    const { OWN_COLUMNS, INDEX_OF_INCLUDES, INCLUDE } = ATTRIBUTES[MODEL];
    const SORT = sort ? sort : 'ASC';

    let associatedModel;

    Object.keys(ATTRIBUTES).forEach((model) => {
      if (ATTRIBUTES[model].OWN_COLUMNS.includes(by)) {
        associatedModel = [models[model], by, SORT];
      }
    });

    /*  Code block #2 ==============================================================================
        This block of code finds if there is an associated model with the column (query param "col")
        for the clause "where" to be used into the query: */
    const filteredModel = Object.entries(INDEX_OF_INCLUDES).filter(
      (entry) => entry[0] === col
    );

    const whereModel = filteredModel[0];
    if (whereModel) {
      const modelIndex = whereModel[1];

      INCLUDE[modelIndex].where = { [col]: { [Op.iLike]: `%${val}%` } }; // footer note #1
      INCLUDE[modelIndex].required = true; // footer note #1
    }
    // end of Code block #2 ======================================================================

    const BY = ATTRIBUTES[MODEL].OWN_COLUMNS.includes(by)
      ? [by, SORT]
      : associatedModel;

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
        where: !whereModel ? WHERE : {}, // unset this clause if searching by an associated model column ("whereModel")
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

/* FOOTER NOTES:
    1) Check about "options.include[].where" and "options.include[].required":
    https://sequelize.org/v5/class/lib/model.js~Model.html#static-method-findAll
*/
