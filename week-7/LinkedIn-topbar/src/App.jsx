import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, sumSelector } from './atoms'

function App() {
  return <RecoilRoot>
    <MainApp></MainApp>
  </RecoilRoot>
}



function MainApp() {
  const networkCount = useRecoilValue(networkAtom)
  const jobsCount = useRecoilValue(jobsAtom)
  const [messagingCount, setMessagingCount] = useRecoilState(messagingAtom)
  const notificationCount = useRecoilValue(notificationAtom)
  const sumCount = useRecoilValue(sumSelector)

  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>Jobs ({jobsCount})</button>
      <button>messaging ({messagingCount})</button>
      <button>notification ({notificationCount})</button>

      <button onClick={() => {
        setMessagingCount(messagingCount+1)
      }}>Me ({sumCount})</button>
    </>
  )
}

export default App
