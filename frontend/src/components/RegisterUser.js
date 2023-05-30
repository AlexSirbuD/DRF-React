import React from 'react';
import { useState } from 'react';
import APIService from './APIService';
import { useNavigate } from 'react-router-dom';

function RegisterUser() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    let navigate = useNavigate()

    

    const register = (e) => {
        e.preventDefault();
        APIService.RegisterUser({ username, email, password1, password2 })
            .then(() => {
                
            })
            .catch(e => console.log(register.e))
            navigate('/login')
    }

    return (

        
        <div className='container mt-5' style={{ 'width': '500px' }}>

        <form  onSubmit={register} >
            <h1>Register Account</h1>

            <div className='mb-3'>
                <input type='text' className='form-control'
                    placeholder='Please enter username'
                    value={username}
                    onChange={evt => setUsername(evt.target.value)} />
            </div>

            <div className='mb-3'>
                <input type='text' className='form-control'
                    placeholder='Please enter email'
                    value={email}
                    onChange={evt => setEmail(evt.target.value)} />
            </div>

            <div className='mb-3'>
                <input type='password' className='form-control'
                    placeholder='Please enter password'
                    value={password1}
                    onChange={evt => setPassword1(evt.target.value)} />
            </div>

            <div className='mb-3'>
                <input type='password' className='form-control'
                    placeholder='Please repeat password'
                    value={password2}
                    onChange={evt => setPassword2(evt.target.value)} />
            </div>

            <button className="btn btn-success" type="submit">Register</button>
            

        </form>

        </div>
    )
}

export default RegisterUser
