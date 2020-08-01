import mongoose from 'mongoose'
module.exports.connect = () => {
  console.log('connectiont to mongo', process.env.MONGO_URL)
  return mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
}

module.exports.mongoose = mongoose;
