const faker = require('faker')
module.exports = async (pModel, pGenerator, amount) => {
  let results = []
  for (let i = 0; i < amount; i++) {
    let data = pGenerator(faker)
    results.push(await pModel.create(data))
  }
  return results
}
