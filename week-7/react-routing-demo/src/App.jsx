import { lazy, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'

const Dashboard = lazy(() =>  import ('./components/Dashboard'))
const Landing = lazy(() => import ('./components/Landing'))

function App() {

 

  return (
    <>
    <BrowserRouter>
      <AppBar></AppBar>
      <Routes>
        <Route path='/dashboard' element={<Suspense fallback={"loading..."}><Dashboard></Dashboard></Suspense>}></Route>
        <Route path='/' element={<Suspense fallback={"loading..."}><Landing></Landing></Suspense>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

function AppBar() {
  const navigate = useNavigate();

  return <div>
    <button onClick={() => {
      navigate("/");
    }}>Landing</button>

    <button onClick={() => {
     navigate('/dashboard')
    }}>Dashboard</button>
  </div>
}
export default App
