import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      title: 'Go to gym',
      description: 'Go to gym from 7-9',
      completed: false
    },
    {
      title: 'Do DSA',
      description: 'Do DSA from 9-11',
      completed: false
    }
  ])

  function addTodos() {
    setTodos([...todos, {
      title: 'New Todo',
      description: 'New Todo description',
      completed: false
    }])
  }


  return (
    <div>
      <button onClick={addTodos}>Add a Todo</button>
      {todos.map(function (todo){
      return (<Todo title={todo.title} description={todo.description}></Todo>)
    })}
    </div>
    
  )
}


function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
)
}
export default App
