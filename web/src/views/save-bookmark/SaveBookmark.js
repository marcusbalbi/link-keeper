import React, {useState} from 'react'
import request from '../../request/request'

const SaveBookmark = props => {
  const [bookmark, setBookmark] = useState(() => {
    return {
      title: '',
      link: '',
      domain: ''
    }
  })

  const saveBookmark = () => {
    request.post('/bookmarks/', {
      ...bookmark
    })
    .then(() => {
      alert('Link Salvo!')
      setBookmark({title: '', link: '', domain: ''})
    })
    .catch(() => {
      alert('falha ao Salvar Link')
    })
    // send to backend
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
          <button onClick={() => { saveBookmark() }}>Save Bookmark</button>
        </div>
      </form>
    </div>
  )
}

export default SaveBookmark
