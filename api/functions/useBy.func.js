const models = require('../models');
const ATTRIBUTES = require('../objects/attributes.obj');

module.exports = function useBy(req) {
  const { MODEL } = req.params;
  const { by, sort: SORT } = req.query;
  const sort = SORT ? SORT : 'ASC';

  if (by) {
    const [byAssoc] = ATTRIBUTES[MODEL].INCLUDE.map((inc) => {
      const { name } = inc.model;

      if (inc.attributes.include.includes(by))
        return [{ model: models[name], as: inc.as }, by, sort];
    });

    const BY = ATTRIBUTES[MODEL].OWN_COLUMNS.includes(by)
      ? [by, sort]
      : byAssoc;

    return [BY];
  } else return null;
};

/*
  Checking wich model has the column indicated by the parameter "req.query.by" to sort the table.
*/
