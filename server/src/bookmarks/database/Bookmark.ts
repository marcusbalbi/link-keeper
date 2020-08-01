import mongoose from 'mongoose';
import crypto from 'crypto-js';

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    link: {
      type: String,
      set: (value : string) => {
        return crypto.AES.encrypt(value, process.env.LINK_ENCRYPT_KEY);
      },
      get: (value : string) => {
        return crypto.AES.decrypt(value, process.env.LINK_ENCRYPT_KEY).toString(crypto.enc.Utf8);
      },
    },
    domain: {
      type: String,
    },
  },
  { toJSON: { getters: true } },
);

const Bookmark = mongoose.model('bookmarks', schema);

export default Bookmark;
