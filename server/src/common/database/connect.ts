import mongoose from 'mongoose';

const connect = (baseName: string = process.env.MONGO_DATABASE_NAME) => {
  const conUrl = `${process.env.MONGO_URL}/${baseName}`;
  console.log('connection to mongo', conUrl);
  return mongoose.connect(conUrl, {
    useNewUrlParser: true,
  });
};

export default connect;
