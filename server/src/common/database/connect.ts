import mongoose from 'mongoose';

const connect = (
  baseName: string = process.env.MONGO_DATABASE_NAME,
  username: string = process.env.MONGO_INITDB_ROOT_USERNAME,
  password: string = process.env.MONGO_INITDB_ROOT_PASSWORD,
) => {
  const conUrl = `mongodb://${username}:${password}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${baseName}?authSource=admin`;
  return mongoose.connect(conUrl, {
    useNewUrlParser: true,
  });
};

export default connect;
