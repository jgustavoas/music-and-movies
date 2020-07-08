const models = require('../models');
const ATTRIBUTES = require('../objects/attributes.obj');

module.exports = function useBy(req) {
  const { MODEL } = req.params;
  const { by, sort: SORT } = req.query;
  const sort = SORT ? SORT : 'ASC';

  if (by) {
    const associatedModel = {};

    ATTRIBUTES[MODEL].INCLUDE.forEach((inc) => {
      const { name } = inc.model;

      if (inc.attributes.include.includes(by)) {
        associatedModel.by = [{ model: models[name], as: inc.as }, by, sort];
      }
    });

    const BY = ATTRIBUTES[MODEL].OWN_COLUMNS.includes(by)
      ? [by, sort]
      : associatedModel.by;

    return [BY];
  } else return null;
};

/*
  Checking wich model has the column indicated by the parameter "req.query.by" to sort the table.
*/
