const { shirtData } = require('../data/appData');

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

exports.cleanUpQuery = (queryString) => {
  const filteredQueryString = {}
  for (let key of Object.keys(queryString)) {
    if (Object.keys(shirtData).includes(key)) {
      filteredQueryString[key] = queryString[key]
    }
  }
  return filteredQueryString;
}
