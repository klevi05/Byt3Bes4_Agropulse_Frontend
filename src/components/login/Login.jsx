import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import logo from '../../assets/logo.svg'
import Cookies from 'js-cookie'

import "./login.css"
function Login(){
    let navigate = useNavigate()
    const [error, setError] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const login= () =>{
        if (username != ""){
            if(password !=""){
                Cookies.set('name', 'value')
                navigate('/home')
            }else{
                setError('Please fill the fields below')
            }
        }else{
            setError('Please fill the fields below')
        }
    }
    return(
        <div className='LogIn'>
            <div className='logInFormBox'>
                <div className='logInBox'>
                    <div className='LoginTitle'>
                            <img className='logoLog' src={logo} alt="logo" />
                        </div>
                    <form className='logInForm'>
                        <p className='error'>{error}</p>
                        <label htmlFor="username">
                            Username
                        </label>
                        <br />
                        <input type="text" id='username' className='usernameInput' onChange={(e)=> setUsername(e.target.value)}/>
                        <br />
                        <label htmlFor="password">
                            Password
                        </label>
                        <br />
                        <input type="password" id='password' className='usernameInput' onChange={(e)=> setPassword(e.target.value)}/>
                        <br />
                        <button type='submit' className='logInButton' onClick={login}>Log In</button>
                        <p className='signUpFunction'>If you dont have an account <Link className='linkLogIn' to='/signIn'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;