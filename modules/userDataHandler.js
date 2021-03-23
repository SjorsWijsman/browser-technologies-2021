const fs = require('fs');

exports.getAllData = () => {
  const rawData = fs.readFileSync('./data/userData.json');
  return JSON.parse(rawData);
}

exports.getUserData = (user) => {
  const userData = this.getAllData()
  return userData[user]
}

exports.storeNewShirt = (user, shirtData) => {
  const userData = this.getAllData();

  if (!userData[user] || !userData[user].shirts) {
    userData[user] = {
      shirts: [],
    }
  }

  userData[user].shirts.push(shirtData)

  fs.writeFileSync('./data/userData.json', JSON.stringify(userData))
}
