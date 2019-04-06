import React from 'react';

const ListBookmarks = props => {
  const renderList = list => {
    return list.map((item) => {
      return <li key={item.id} ><a href={item.link} target="blank" >{item.title}</a></li>
    })
  }
  return (
    <div>
      <ul>
        {renderList(props.list)}
      </ul>
    </div>
  )
}

export default ListBookmarks
