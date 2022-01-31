import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contextJS } from './Context/Context'

const Home = () => {
  const context = useContext(contextJS)

  return (
    <>
      {context.AppLoginState ? (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#ID</th>
              <th>#Ad Soyad</th>
              <th>#E-posta</th>
              <th>#Yaş</th>
              <th>#Renk</th>
              <th>#Renk Degistir</th>
            </tr>
          </thead>
          <tbody>
            {context.users.map((user) => {
              return (
                <tr
                  key={user.id}
                  style={
                    user.id === context.userIdIndex
                      ? { backgroundColor: context.color, color: 'white' }
                      : null
                  }
                >
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>{user.color}</td>
                  <td>
                    <button
                      className="btn "
                      style={{ backgroundColor: user.color, color: 'white' }}
                      onClick={() => {
                        context.randomRenkOlustur(user.id)
                      }}
                    >
                      Renk Değiştir
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        <p>
          Bu sayfayı görme yetkiniz yok. Lütfen giriş yapınız.{' '}
          <Link to="/login">Giriş Yap </Link>
        </p>
      )}
    </>
  )
}

export default Home
