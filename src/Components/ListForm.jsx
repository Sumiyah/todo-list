import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const ListForm = props => {
  const [item, setItem] = useState('')
  //onsubmit method 
  //create
  const addItem = e => {
    e.preventDefault()
    props.createItem({ myItem: item, myStatus: props.status })
    setItem('')
  }

  return (
    <form onSubmit={addItem} className="">
      <div className="form-group">
        <input className="form-control" type="text" placeholder="What's on your to-do list?" onChange={e => setItem(e.target.value)} value={item} />
      </div>
      <button className="btn btn-block btn-danger mt-2">Add</button>
    </form>
  )
}

export default ListForm