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
  let userData = this.getAllData();

  userData[user].shirts = userData[user].shirts.filter((value, index) => {
    return index !== shirtIndex
  })

  fs.writeFileSync('./data/userData.json', JSON.stringify(userData))
}

exports.addOrder = (user, shirtIndex) => {
  const userData = this.getAllData();

  if (!userData[user] || !userData[user].order) {
    userData[user] = {
      ...userData[user],
      order: [],
    }
  }

  userData[user].order.push(userData[user].shirts[shirtIndex])

  fs.writeFileSync('./data/userData.json', JSON.stringify(userData))
}

exports.removeOrder = (user, orderIndex) => {
  let userData = this.getAllData();

  userData[user].order = userData[user].order.filter((value, index) => {
    return index !== orderIndex
  })

  console.log(userData[user].order)

  fs.writeFileSync('./data/userData.json', JSON.stringify(userData))
}
