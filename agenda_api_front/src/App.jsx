import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <div>
      <div>
        <Outlet />
      </div>
    </div>
    </>
  )
}

export default App
