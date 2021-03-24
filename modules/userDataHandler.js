const fs = require('fs');

exports.getAllData = () => {
  const rawData = fs.readFileSync('./data/userData.json');
  if (rawData) {
    return JSON.parse(rawData);
  }
}

exports.getUserData = (user) => {
  const userData = this.getAllData()
  return userData[user]
}

exports.storeNewShirt = (user, shirtData) => {
  const userData = this.getAllData();

  if (!userData[user] || !userData[user].shirts) {
    userData[user] = {
      ...userData[user],
      shirts: [],
    }
  }

  userData[user].shirts.push(shirtData)

  fs.writeFileSync('./data/userData.json', JSON.stringify(userData))
}

exports.removeShirt = (user, shirtIndex) => {
  console.log(user, shirtIndex);
  let userData = this.getAllData();

  console.log(userData[user].shirts)
  userData[user].shirts = userData[user].shirts.filter((value, index) => {
    return index !== shirtIndex
  })

  fs.writeFileSync('./data/userData.json', JSON.stringify(userData))
}
