import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [sum, setSum] = useState(1)

  let temp = useMemo(() => {
    let temp = 0
    for (let i = 1; i <= sum; i++) {
      temp += i
    }
    return temp
  }, [sum])
  
  return (
    <>
      <input type="text" placeholder="Find sum" onChange={ function (e) {
        const n = parseInt(e.target.value)
        setSum(n)
      }}/>
      <div>Sum is {temp}</div>
      <button onClick={() => setCount(count+1)}>Counter ({count})</button>
    </>
  )
}

export default App
