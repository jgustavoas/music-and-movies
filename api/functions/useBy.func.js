const models = require('../models');
const ATTRIBUTES = require('../objects/attributes.obj');

module.exports = function useBy(MODEL, query) {
  const { by, sort } = query;
  const SORT = sort ? sort : 'ASC';

  const associatedModel = {};

  Object.keys(ATTRIBUTES).forEach((model) => {
    if (ATTRIBUTES[model].OWN_COLUMNS.includes(by)) {
      associatedModel.by = [models[model], by, sort];
    }
  });

  const BY = ATTRIBUTES[MODEL].OWN_COLUMNS.includes(by)
    ? [by, SORT]
    : associatedModel.by;

  return [BY];
};

/*
  Checking wich model has the column indicated by the parameter "req.query.by" to sort the table.
*/
