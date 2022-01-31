import './App.css'
import Login from './Login'
import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from 'react-router-dom'
import Home from './Home'

import { contextJS } from './Context/Context'
import { Users, colors, initialState } from './Context/data'

function App() {
  const [users, setUsers] = useState(Users)
  const [color, setColor] = useState(null)
  const [userIdIndex, setUserIdIndex] = useState(null)
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [AppLoginState, setAppLoginState] = useState(false)
  const [user, setUser] = useState('')

  const randomRenkOlustur = (userId) => {
    // random sayı olustur 0-12 arasinda
    let randomIndex = (Math.random() * 12).toFixed(0)

    setColor(colors[randomIndex])
    setUserIdIndex(userId)
  }

  return (
    <contextJS.Provider
      value={{
        users,
        setUsers,
        randomRenkOlustur,
        color,
        userIdIndex,

        AppLoginState,
        setAppLoginState,

        user,
        setUser,
      }}
    >
      <BrowserRouter>
        <Header />
        <div className="container-fluid mt-3">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </contextJS.Provider>
  )
}

export default App
