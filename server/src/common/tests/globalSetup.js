module.exports = () => {
  /**
   * Module dependencies.
   */
  require('dotenv').load();
  process.env.MONGO_URL = 'mongodb://127.0.0.1:27017/link-keeper-test';
};
