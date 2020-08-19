import mongoose from 'mongoose';

const connect = (
  baseName: string = process.env.MONGO_DATABASE_NAME,
  username: string = process.env.MONGO_INITDB_ROOT_USERNAME,
  password: string = process.env.MONGO_INITDB_ROOT_PASSWORD,
) => {
  const hasAuth = username && password;
  let conUrl = `mongodb://`;
  if (hasAuth) {
    conUrl = conUrl.concat(`${username}:${password}@`);
  }
  conUrl = conUrl.concat(
    `${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${baseName}${
      hasAuth && 'authSource=admin'
    }`,
  );
  console.log(conUrl);
  return mongoose.connect(conUrl, {
    useNewUrlParser: true,
  });
};

export default connect;
