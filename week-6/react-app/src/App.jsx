import { useState } from 'react'


function App() {

  
  return (
    <>
      <HeaderWithButton></HeaderWithButton>
      <Header title={'raman'}></Header>
    </>
  )
}

function HeaderWithButton() {
  const [firsttitle, setFirstTitle] = useState("John")

  function onClickHandler() {
    setFirstTitle(Math.random())
  }

  return (
    <>
      <button onClick={onClickHandler}>Click Me to Change the title</button>
      <Header title={firsttitle}></Header>
    </>
  )
}

function Header({title}) {
  return (
    <>
      <div>My name is {title}</div>
    </>
  )
}

export default App
