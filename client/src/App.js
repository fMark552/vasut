import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Mav from './pages/Menetrend'
import Hozzaadas from './pages/Hozzaadas'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mav />} />
          <Route path="/add" element={<Hozzaadas />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
