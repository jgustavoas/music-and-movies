var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const models = require('../models');

const ATTRIBUTES = require('../objects/attributes.obj');
const msg = require('../objects/messages.obj');

const cleanUp = require('../functions/cleanUp.func');
const useWhere = require('../functions/useWhere.func');
const useBy = require('../functions/useBy.func');

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

    const { OWN_COLUMNS, INCLUDE } = ATTRIBUTES[MODEL];
    const SORT = sort ? sort : 'ASC';

    const associatedModel = {};

    cleanUp(INCLUDE);
    useWhere(INCLUDE, rest);
    useBy(associatedModel, req.query);

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
        where: WHERE,
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
