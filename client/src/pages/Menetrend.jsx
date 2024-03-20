import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../css/Menetrend.css'

const Mav = () => {
  const [menetrendek, setMenetrendek] = useState([])

  useEffect(() => {
    const fetchMenetrend = async () => {
      try {
        const res = await axios.get('http://localhost:1234/mav')
        setMenetrendek(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchMenetrend()
  }, [])

  return (
    <div className="menetrend_big_div">
      <div className="menetrend">
        <h1>MENETREND</h1>
        <table>
          <thead>
            <tr>
              <th>Kerekerdő-alsó - Kerekerdő-felső</th>
              <th>Kerekerdő-felső - Kerekerdő-alsó</th>
            </tr>
          </thead>
          <tbody>
            {menetrendek.map((menetrend) => (
              <tr key={menetrend.id} className="menetrend">
                <td>
                  <p>{menetrend.also_ido}</p>
                </td>
                <td>
                  <p>{menetrend.felso_ido}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="ujMenetrend">
        <Link className="link" to="/add">
          Új adat hozzáadása
        </Link>
      </button>
    </div>
  )
}

export default Mav
