import React from 'react'
import SaveBookmark from '../components/bookmarks/SaveBookmark'
import ListBookMarks from '../components/bookmarks/ListBookMarks'
const Bookmarks = props => {
  return (
    <section className="bookmarks" >
      <aside className="save-bookmarks" >
        <SaveBookmark />
      </aside>
      <main className="list-bookmarks" >
        <ListBookMarks />
      </main>
    </section>
  )
}

export default Bookmarks