import React, { useState } from 'react'
import SaveBookmark from '../components/bookmarks/SaveBookmark'
import ListBookMarks from '../components/bookmarks/ListBookMarks'
import request from '../request/request'

const Bookmarks = props => {
  const [list, setList] = useState([])

  const saveBookmark = bookmark => {
    request.post('/bookmarks/', {
      ...bookmark
    })
      .then(() => {
        alert('Link Salvo!')
        listBookMarks()
      })
      .catch(() => {
        alert('falha ao Salvar Link')
      })
  }

  const listBookMarks = () => {
    request.get('/bookmarks/')
      .then((res) => {
        setList(() => { return res.data.data })
      })
  }
  console.log(list)
  if (list.length === 0) {
    listBookMarks()
  }
  return (
    <section className="bookmarks" >
      <aside className="save-bookmarks" >
        <SaveBookmark onSaveBookmark={saveBookmark} />
      </aside>
      <main className="list-bookmarks" >
        <ListBookMarks list={list} />
      </main>
    </section>
  )
}
export default Bookmarks