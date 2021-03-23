exports.queryToObject = (queryString) => {
  return JSON.parse('{"' + queryString
    .split('?')
    .pop()
    .replace(/&/g, '","')
    .replace(/=/g,'":"') + '"}', (key, value) => {
      return key === "" ? value : decodeURIComponent(value)
    }
  )
}
