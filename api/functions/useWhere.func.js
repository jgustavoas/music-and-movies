var Sequelize = require('sequelize');
const Op = Sequelize.Op;

const ATTRIBUTES = require('../objects/attributes.obj');

module.exports = (req) => {
  const { MODEL } = req.params;
  const { OWN_COLUMNS, INCLUDE } = ATTRIBUTES[MODEL];
  const { by, sort, offset, limit, ...cols } = req.query;
  const andColumns = {};

  Object.entries(cols).forEach((and) => {
    const [col, val] = and;

    const found = OWN_COLUMNS.find((column) => column === col);
    if (found) andColumns[col] = { [Op.iLike]: `%${val}%` };

    INCLUDE.find((model) => {
      const foundModel = model.attributes.include.some(
        (column) => column === col
      );

      if (foundModel) {
        model.where = { [col]: { [Op.iLike]: `%${val}%` } }; // #1
        model.required = true; // #1
      }
    });
  });

  return {
    [Op.and]: andColumns,
  };
};

/*
    #1 Check about "options.include[].where" and "options.include[].required":
    https://sequelize.org/v5/class/lib/model.js~Model.html#static-method-findAll
*/
