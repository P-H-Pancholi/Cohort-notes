import { useState } from 'react'
import './App.css'

let idCounter = 4;

function App() {
  const [todos, setTodo] = useState([{
      id: 1,
      title: 'todo1',
      description: 'todo1 des'
    },{
      id: 2,
      title: 'todo2',
      description: 'todo2 des'
    },{
      id: 3,
      title: 'todo3',
      description: 'todo3 des'
    }
  ])
  function addTodo() {
    setTodo([...todos, {
      id: idCounter++,
      title : Math.random(),
      description: Math.random()
    }])
  }
  return (
    <>
      <button onClick={addTodo}>add a todo</button>
      {todos.map(function (todo) {
        return <Todo key={todo.id} title={todo.title} description={todo.description}/>
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
