import React, { useState, useContext } from 'react'
import { contextJS } from './Context/Context'

import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const context = useContext(contextJS)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginState, setLoginState] = useState(false)

  const navigate = useNavigate()

  //console.log(context)

  const login = () => {
    // user var mi kontrol edelim.

    let userIndex = context.users.findIndex((user) => {
      if (user.email === email && user.pass === +password) {
        return user
      }
    })

    if (userIndex < 0) {
      let hata = 'Böyle bir kullanıcı bulunmuyor'
    } else {
      // kullanıcı vardır, anasayfaya yönlendirelim.

      context.setAppLoginState(true)

      navigate('/')
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Ufuk Uçar </h2>
          <div className="text-center mb-5 text-dark">Login Page</div>
          <div className="card my-5">
            <form className="card-body cardbody-color p-lg-5">
              <div className="text-center">
                <img
                  src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  id="Username"
                  autoFocus
                  aria-describedby="emailHelp"
                  placeholder="E-posta"
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="password"
                  className="form-control"
                  id="password"
                  placeholder="Şifre"
                  onChange={(e) => {
                    console.log('password: ', e.target.value)
                    setPassword(e.target.value)
                  }}
                />
              </div>
              <div className="text-center">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    login()
                  }}
                  className="btn btn-color px-5 mb-5 w-100"
                >
                  Giriş Yap
                </button>

                <p className=" text-danger"></p>
              </div>
              <div
                id="emailHelp"
                className="form-text text-center mb-5 text-dark"
              >
                Üye değil misin?{' '}
                <Link to="#" className="text-dark fw-bold">
                  {' '}
                  Hesap oluştur
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
