import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState } from 'recoil'
import { todosAtomFamily } from './atoms'

function App() {
 
  return (
    <>
      <RecoilRoot>
        <Todo id={1} />
        <Todo id={2} />
        <Todo id={3} />
        <Todo id={4} />
        <Todo id={5} />
        <Todo id={6} />
        <Todo id={7} />
      </RecoilRoot>
    </>
  )
}

function Todo({id}) {
  const [todos, setTodos] = useRecoilState(todosAtomFamily(id))

  return (
    <div>
      <div>Todo : {todos.id}</div>
      <div>{todos.todo}</div>
    </div>
  )
}

export default App
