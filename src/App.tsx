import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './components/Home'
import BasicDisplayPage from './components/BasicDisplayPage'
import { fill_dsa_topics } from './store/fill_contents'


function App() {
  // Fill the store with DSA topics when the app loads
  useEffect(() => {
    fill_dsa_topics();
  }, []);

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dsa" element={<BasicDisplayPage />} />
    <Route path="/contact" element={<p>hi</p>} />
    <Route path="/about" element={<p>hi</p>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
