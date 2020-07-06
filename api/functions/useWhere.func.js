var Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = (include, rest) =>
  Object.entries(rest).forEach((and) => {
    const [col, val] = and;

    include.find((model) => {
      const foundModel = model.attributes.include.some(
        (column) => column === col
      );

      if (foundModel) {
        model.where = { [col]: { [Op.iLike]: `%${val}%` } }; // #1
        model.required = true; // #1
      }
    });
  });

/*
    #1 Check about "options.include[].where" and "options.include[].required":
    https://sequelize.org/v5/class/lib/model.js~Model.html#static-method-findAll
*/
