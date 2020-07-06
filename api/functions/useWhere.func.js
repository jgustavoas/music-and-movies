var Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function useWhere(col, val, inc, prop) {
  inc.find((model) => {
    const foundModel = model.attributes.include.some(
      (column) => column === col
    );
    if (foundModel) {
      //associatedModel[prop] = true;

      model.where = { [col]: { [Op.iLike]: `%${val}%` } }; // see footer note #1
      model.required = true; // see footer note #1

      return true;
    }
  });
};

/*
  FOOTER NOTES:
    1) Check about "options.include[].where" and "options.include[].required":
    https://sequelize.org/v5/class/lib/model.js~Model.html#static-method-findAll
*/
