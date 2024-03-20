import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'vasut',
})

app.get('/', (req, res) => {
  res.json('aha')
})

app.get('/mav', (req, res) => {
  const q = 'SELECT * FROM menetrend'
  db.query(q, (err, data) => {
    if (err) {
      console.log(err)
      return res.json(err)
    }
    return res.json(data)
  })
})

app.post('/mav', (req, res) => {
  const q = 'INSERT INTO menetrend(`also_ido`, `felso_ido`) VALUES (?)'

  const values = [req.body.also_ido, req.body.felso_ido]

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err)
    return res.json(data)
  })
})

app.listen(1234, () => {
  console.log('Csatlakozva a szerverhez.')
})
