import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginAdmin from './pages/LoginAdmin'
import AdminDashboard from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <LoginAdmin /> */}
    <AdminDashboard />
    </>
  )
}

export default App
