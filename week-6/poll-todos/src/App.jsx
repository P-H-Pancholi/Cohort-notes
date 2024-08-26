import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [todos, setTodo] = useState([])

  useEffect(  () => {
    setInterval( () => {
      fetch("https://sum-server.100xdevs.com/todos").then( 
        async function (res) {
        const json = await res.json()
        setTodo(json.todos)
      })
    }, 10000)
  }, [])

  return (
    <>
      {todos.map(function (todo) {
        return <Todo title={todo.title} description={todo.description} ></Todo>
      })}
    </>
  )
}


function Todo({title, description}) {
  return <div>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </div>
}
export default App
