import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { contextJS } from './Context/Context'

const Header = () => {
  const context = useContext(contextJS)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/#">
          Keyfimin Context API'si
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {context.AppLoginState && (
              <li>
                <Link className="nav-link" to="/#">
                  Anasayfa
                </Link>
              </li>
            )}

            {!context.AppLoginState && (
              <li className="nav-item active">
                <Link className="nav-link" to="/login">
                  Giriş
                </Link>
              </li>
            )}

            {context.AppLoginState && (
              <li className="nav-item ">
                <button
                  className="btn btn-primar"
                  style={{ color: '#fff' }}
                  onClick={() => {
                    context.setAppLoginState(false)
                  }}
                >
                  Çıkış Yap
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
