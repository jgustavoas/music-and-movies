var Sequelize = require('sequelize');
const Op = Sequelize.Op;

function requireWhere(inc, col, val) {
  inc.find((model) => {
    const foundModel = model.attributes.include.some(
      (column) => column === col
    );

    if (foundModel) {
      model.where = { [col]: { [Op.iLike]: `%${val}%` } }; // see footer note #1
      model.required = true; // see footer note #1
    }
  });
}

module.exports = (include, rest) =>
  Object.entries(rest).forEach((and) => {
    const [col, val] = and;
    requireWhere(include, col, val);
  });

/*
  FOOTER NOTES:
    1) Check about "options.include[].where" and "options.include[].required":
    https://sequelize.org/v5/class/lib/model.js~Model.html#static-method-findAll
*/
