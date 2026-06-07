import { useState, useEffect, useRef } from 'react'
import StartScreen from './components/StartScreen'
import MainLayout from './components/MainLayout'
import Petals from './components/Petals'
import './App.css'

export default function App() {
  const [started, setStarted] = useState(false)
  const [visible, setVisible] = useState(false)

  const handleStart = () => {
    setStarted(true)
    setTimeout(() => setVisible(true), 50)
  }

  return (
    <div className="app-root">
      <Petals active={started} />
      {!started && <StartScreen onStart={handleStart} />}
      {started && <MainLayout visible={visible} />}
    </div>
  )
}
