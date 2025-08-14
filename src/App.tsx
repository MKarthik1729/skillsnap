import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>ALL required dependences installed</p>
      <ul>
        <li>react-router-dom</li>
        <li>axios</li>
        <li>zustand</li>
        <li>phospher icons</li>
        <li>tailwind css</li>
      </ul>
    </>
  )
}

export default App
