import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password })
      if (response.data.success) {
        setMessage("Login successful")
      } else {
        setMessage("Login failed")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (

    <div>
      <h1>Login</h1>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  )
}


export default App
