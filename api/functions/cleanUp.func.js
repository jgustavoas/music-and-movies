module.exports = function cleanUp(INCLUDE) {
  INCLUDE.forEach((include) => {
    include.where = null;
    include.required = false;
  });
};

/*

This clean-up unsets that property "where", preventing Sequelize to create an undesirable INNER JOIN with it.

That's because that property stays in memory if the user has sent a request indicating a column...
...that belongs to an associated model, the property "where" for that associated model...
...remains defined for the following requests, even if no respective parameter is passed within the new requests.

*/
