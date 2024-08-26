import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [selectedId, setselectedId] = useState(1);

  // function OnButtonClick(n){
  //   setselectedId(n)
  // }
  
  return(
    <div>
      <button onClick={function () {
        setselectedId(1)
      }}>1</button>

      <button onClick={function () {
        setselectedId(2)
      }}>2</button>

      <button onClick={function () {
        setselectedId(3)
      }}>3</button>

      <button onClick={function () {
        setselectedId(4)
      }}>4</button>

      <Todo id={selectedId}></Todo>
    </div>
  ) 
  
}

function Todo ({id}) {
  const [todo, setTodo] = useState({})

  useEffect(() => {
    fetch("https://dummyjson.com/todos/" + id).then(
      async function (res) {
        const json = await res.json()
        setTodo(json)
      }
    )
  }, [id])
  return (
    <div>
      <h1>{todo.todo}</h1>
    </div>
  )
}

export default App
