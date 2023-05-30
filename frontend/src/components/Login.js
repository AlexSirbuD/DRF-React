import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')



  let navigate = useNavigate()



  const login = () => {
    fetch('http://127.0.0.1:8000/dj-rest-auth/login/', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'

      },
      body: JSON.stringify({ username, password })
    })
      .then(resp => resp.json())
      .then(result => {
        if (result.key === undefined) {
          setError('Invalid username or password')
          return
        }
        console.log(username)
        localStorage.setItem('mytoken', result.key)
        navigate('/')
      })
  }


  return (
    <div className="container mt-4" style={{ 'width': '500px' }}>

      <br />

      {error ?
        <div className="alert alert-warning alert-dismissible" role="alert">
          <p>{error}</p>
        </div>

        :

        null
      }

      <h2>Please Login</h2>

      <div className="mb-3">
        <input type="text" className="form-control"
          name='username' placeholder="Please enter user"
          value={username}
          onChange={evt => setUsername(evt.target.value)} />

      </div>

      <div className="mb-3">
        <input type="password" className="form-control"
          name='password' placeholder="Please enter password"
          value={password}
          onChange={evt => setPassword(evt.target.value)}
        />


      </div>

      <div className="mb-3">
        <button onClick={login} className="btn btn-success">Login</button>

      </div>

      <Link to="/register" variant="body2">
        Not have an account ? Sign up here
      </Link>

    </div>
  )
}

export default Login
