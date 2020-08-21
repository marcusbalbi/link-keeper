import { Request, Response } from 'express';
import Bookmark from '@bookmarks/database/Bookmark';

export default {
  index(req: Request, res: Response) {
    Bookmark.find({}).then((list) => {
      res.json({ data: list });
    });
  },
  show(req: Request, res: Response) {
    Bookmark.findById(req.params.id)
      .then((bookmark) => {
        res.json({ data: bookmark });
      })
      .catch((err) => {
        res.status(400).json({ message: 'Bookmark Não encontrado' });
      });
  },
};
