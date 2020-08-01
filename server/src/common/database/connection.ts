import mongoose from 'mongoose'
export const connect = () => {
  console.log('connectiont to mongo', process.env.MONGO_URL)
  return mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
}

export default mongoose;
