import { Request, Response } from 'express';
import Bookmark from '@bookmarks/database/Bookmark';

interface BookMarkFilter {
  title?: string;
  domain?: string;
}

export default {
  index(req: Request, res: Response) {
    const filter: BookMarkFilter = req.query;
    const preparedFilter: any = {};
    if (filter.title) {
      preparedFilter.title = { $regex: new RegExp(`^${filter.title}.*$`, 'i') };
    }
    Bookmark.find(preparedFilter)
      .then((list) => {
        res.json({ data: list });
      })
      .catch((err) => {
        res.status(500).json({ message: 'Erro na busca' });
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
