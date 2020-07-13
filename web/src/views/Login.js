import React from 'react'

// Login Function
// state
// redux for save login on memory or just use localstorage
export default () => {
  return (
    <div className="login" >
      <form className="form" onSubmit={(e) => { e.preventDefault() }} >
        <div className="form-control" >
          <label>
            <span>User:</span> <input className="textfield textfield-lg"  type="text" />
          </label>
        </div>
        <div className="form-control" >
          <label>
            <span>Password:</span> <input className="textfield textfield-lg"  type="password" />
          </label>
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  )
}
