import React from 'react'
import Bookmarks from '../../views/Bookmarks'
import Login from '../../views/Login'

const renderContent = () => {
  const user = {}
  if (user) {
    return <Bookmarks />
  }
  return <Login />
}
export default () => {
  return (
    <main className="main" >
      {renderContent()}
    </main>
  )
}