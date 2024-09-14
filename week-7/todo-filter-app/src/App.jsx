import { useState } from 'react'
import './App.css'
import {useRecoilState, RecoilRoot, useRecoilValue, useSetRecoilState} from "recoil"
import { filterAtom, todosAtom, filteredTodo } from './Store/Atom/Todo'

function App() {

  return (
    <>
      <RecoilRoot>
        <CreateTodo/>
        <Todo/>
        <FilterTodo/>
      </RecoilRoot>
    </>
  )
}

function CreateTodo() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [todos, addTodos] = useRecoilState(todosAtom)
  function addTodo() {
    addTodos([...todos, {
      title,
      description
    }])
  }
  return (
    <div>
      <input type="text" placeholder="title" onChange={function (e) {
        setTitle(e.target.value) // e.target => html element
      }}/>
      <br /><br /><br />
      <input type="text" placeholder="Description" onChange={function (e) {
        setDescription(e.target.value) // e.target => html element
      }}/>
      <br /><br /><br />
      <button onClick={addTodo}>Add a Todo</button>
  </div>
  )
}

function Todo() {
  const todos = useRecoilValue(todosAtom)
  return <div>{
    todos.map(x => {
      return (
      <div>
      <h1>{x.title}</h1>
      <h2>{x.description}</h2>
      </div>
      )
    })
  }
  </div>
}

function FilterTodo() {
  const setFilter = useSetRecoilState(filterAtom)
  const filteredTodoValue = useRecoilValue(filteredTodo)
  return (
    <div>
      <input type="text" placeholder="filter" onChange={function (e) {
        setFilter(e.target.value) // e.target => html element
      }}/>
      <br /><br /><br />
      <div>
        {filteredTodoValue.map(x => {
      return (
      <div>
      <h1>{x.title}</h1>
      <h2>{x.description}</h2>
      </div>
      )})}
      </div>
    </div>
  )
}
export default App
