import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  return (
    <>
    {/* <CardWrapper innerComponent={<TextComponent></TextComponent>} ></CardWrapper> */}
    <CardWrapper>
      <div>
        Hi there
      </div>
    </CardWrapper>
    </>
  )
}

// function TextComponent() {
//   return <div>
//     Hi there
//   </div>
// }


function CardWrapper({children}) {
  console.log(children)
  return <div style={{border: "2px solid black"}}>
    {children}
  </div>
}

export default App
