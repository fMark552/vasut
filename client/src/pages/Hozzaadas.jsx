import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/Hozzaadas.css'

const Hozzaadas = () => {
  const [menetrend, setMenetrend] = useState({
    also_ido: '',
    also_ido: '',
  })
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setMenetrend((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:1234/mav', menetrend)
      navigate('/')
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  return (
    <div className="form">
      <h1>Új adat hozzáadása</h1>
      <input
        type="text"
        placeholder="Kerekerdő-alsó idő hozzáadása"
        name="also_ido"
        onChange={handleChange}
      />
      <hr />
      <input
        type="text"
        placeholder="Kerekerdő-felso idő hozzáadása"
        name="felso_ido"
        onChange={handleChange}
      />
      <hr />
      <button className="ujHozzaad" onClick={handleClick}>
        Hozzáadás
      </button>
      {error && 'Hiba történt!'}
      <hr />
      <button className="visszaMenetrend">
        <Link className="link" to="/">
          Vissza a menetrendhez
        </Link>
      </button>
    </div>
  )
}

export default Hozzaadas
