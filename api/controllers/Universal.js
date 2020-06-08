var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const models = require('../models');

const ATTRIBUTES = require('../objects/attributes.obj');

class UniversalControllers {
  async create(req, res, next) {
    // To be implemented.
  }

  async read(req, res, next) {
    const { TABLE } = req.params;
    const { val, col, by, sort, offset, limit } = req.query;

    const { COLUMNS, INCLUDE } = ATTRIBUTES[TABLE];

    const QUERY = {
      WHERE: val ? { [col]: { [Op.iLike]: `%${val}%` } } : {},
      ORDER: by ? [[by, sort ? sort : 'ASC']] : null,
      OFFSET: offset ? offset : null,
      LIMIT: limit ? limit : null,
    };

    const { WHERE, ORDER, OFFSET, LIMIT } = QUERY;

    try {
      async function toRead() {
        await models[TABLE].findAll({
          attributes: COLUMNS,
          include: INCLUDE,
          order: ORDER,
          where: WHERE,
          limit: LIMIT,
          offset: OFFSET,
        }).then((rows) => {
          res.json(rows);
        });
      }

      toRead();
    } catch (err) {
      throw err;
    } finally {
      //if (conn) return conn.end();
    }
  }

  async update(req, res, next) {
    // To be implemented.
  }

  async delete(req, res, next) {
    // To be implemented.
  }
}

module.exports = new UniversalControllers();
