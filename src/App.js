import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ListForm from './Components/ListForm';

function App() {
  const [items, setitems] = useState([])
  const [status, setStatus] = useState(false)

  //update ( toggle )
  const changeState = (i) => {
    let temp = [...items]
    console.log('before: ', temp[i].myStatus)
    temp[i].myStatus = !temp[i].myStatus
    console.log('after: ', temp[i].myStatus)
    setitems(temp)
  }

  //delete
  const deleteItem = (i) => {
    let temp = [...items]
    temp.splice(i, 1)
    console.log("we're deleting this item: ", temp[i])
    setitems(temp)
  }


  return (
    <div className="container mt-3">
      <div className="jumbotron bg-danger text-center text-light">
        <h1>My To-Do List</h1>
      </div>

      <div className="row p-3 justify-content-around">

        <div className="col-md-5 ">
          <ListForm
            createItem={
              item => setitems([...items, item],
                console.log(item)
              )
            }
            status={status} />
        </div>

        <div className="col-sm-1"></div>
        <div className="col-md-5">

          <h3>Your List:</h3>
          <ul className="list-group">
            {items.map((item, i) =>
              <div>
                <li className={item.myStatus ? 'text-success' : ""} key={i} >
                <span onClick={() => changeState(i)}>
                {item.myItem}
                </span>

                {/* terenary operator ? : */}
                {item.myStatus ?
                  <a onClick={() => deleteItem(i)} className="close ">
                    &times;
                  </a>
                  : ''}
                </li>
                
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}


export default App;
