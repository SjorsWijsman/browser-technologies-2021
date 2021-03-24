const { shirtData } = require('../data/appData');

// Converts query string to object
exports.queryToObject = (location) => {
  if (location.includes('?')) {
    let queryString = location.split('?').pop();
    return JSON.parse('{"' + queryString
      .replace(/&/g, '","')
      .replace(/=/g,'":"') + '"}', (key, value) => {
        return key === "" ? value : decodeURIComponent(value)
      }
    )
  }
}

// Removes unused keys from query
exports.cleanUpQuery = (queryString) => {
  const filteredQueryString = {}
  for (let key of Object.keys(queryString)) {
    if (Object.keys(shirtData).includes(key)) {
      filteredQueryString[key] = queryString[key]
    }
  }
  return this.validateQuery(filteredQueryString);
}

// Validates query, replaces with default value if invalid or missing
exports.validateQuery = (query) => {
  for (option of Object.keys(shirtData)) {
    if (!query[option] || !shirtData[option].options.includes(query[option])) {
      console.log(query)
      query[option] = shirtData[option].default;
    }
  }
  return query
}
