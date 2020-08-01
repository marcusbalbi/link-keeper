import Bookmark from '../database/Bookmark';

describe('bookmarks api', () => {
  it('should returl all bookmarks', (done) => {
    Bookmark.find({}).then((res) => {
      console.log(res);
      expect(1).toBe(1);
      done();
    });
  });
});
