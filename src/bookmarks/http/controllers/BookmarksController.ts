import { Request, Response } from 'express';
import Bookmark from '@bookmarks/database/Bookmark';

export default {
  index(req: Request, res: Response) {
    Bookmark.find({}).then((list) => {
      res.json({ data: list });
    });
  },
};
