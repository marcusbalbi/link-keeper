import Bookmark from '../database/Bookmark';

describe('bookmarks api', () => {
  it('should return all bookmarks', (done) => {
    Bookmark.find({}).then((res) => {
      console.log(res);
      expect(res.length).toBe(0);
      done();
    });
  });
});
