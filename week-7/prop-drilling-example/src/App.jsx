import { useContext, useState } from 'react'
import './App.css'
import { CountContext } from './context'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'

function App() {
  return (
    <>
      <RecoilRoot>
        <Count></Count>
      </RecoilRoot>
    </>
  )
}


function Count({setCount}) {
  console.log("re-render")
  return <div>
    <CountRenderer></CountRenderer>
    <Buttons></Buttons>
    <IsEven></IsEven>
  </div>

}

function IsEven() {
  // const count = useRecoilValue(countAtom)
  // let s = ""
  // if(count % 2 == 0){
  //     s="IT IS EVEN"
  // }
  // return <div>{s}</div>
  const isEven = useRecoilValue(evenSelector)

  return <div>
    {isEven == 0 ? "IT IS EVEN" : null}
  </div>
}
function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return <div>
    {count}
  </div>
}
function Buttons() {
  console.log("button re-render")
  const  setCount = useSetRecoilState(countAtom)
  return <div>
      <button onClick={() => {
        setCount(count => count+1) // not use count state var to avoid re-renders
      }}>
        Increase
      </button>
      <button onClick={() => {
        setCount(count => count-1)
      }}>
        decrease
      </button>
  </div>

}
export default App
