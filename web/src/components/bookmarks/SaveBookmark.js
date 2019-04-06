import React, {useState} from 'react'

const SaveBookmark = props => {
  const [bookmark, setBookmark] = useState(() => {
    return {
      title: '',
      link: '',
      domain: ''
    }
  })
  const save = () => {
    props.onSaveBookmark(bookmark)
    setBookmark({ title: '', link: '', domain: '' })
  }
  return (
    <div className="save-bookmark">
      <form className="form" onSubmit={(e) => { e.preventDefault() }} >
        <div className="form-control" >
          <label>
            Title: <input className="textfield textfield-lg" value={bookmark.title} onChange={(e) => { setBookmark({...bookmark, title: e.target.value}) }}  type="text" />
          </label>
        </div>
        <div className="form-control" >
          <label>
            Link: <input className="textfield textfield-lg" value={bookmark.link} onChange={(e) => { setBookmark({ ...bookmark, link: e.target.value }) }}  type="text" />
          </label>
        </div>
        <div className="form-control" >
          <label>
            Domain: <input className="textfield textfield-lg" value={bookmark.domain} onChange={(e) => { setBookmark({ ...bookmark, domain: e.target.value }) }}  type="text" />
          </label>
        </div>
        <div>
          <button onClick={save}>Save Bookmark</button>
        </div>
      </form>
    </div>
  )
}
SaveBookmark.defaultProps = {
  onSaveBookmark: () => {}
}
export default SaveBookmark
