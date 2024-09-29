import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { notificationAtom, sumSelector } from './atoms'
import {RecoilRoot, useRecoilState, useRecoilValue} from "recoil"

function App() {

  return(
    <>
      <RecoilRoot>
        <MainApp/>
      </RecoilRoot>
    </>
  )
  
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notificationAtom)
  const allNotificationsCount = useRecoilValue(sumSelector)

  
  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>messaging ({networkCount.messaging})</button>
      <button>notification ({networkCount.notifications})</button>

      <button>Me ({allNotificationsCount})</button>
    </>
  )
}

export default App
