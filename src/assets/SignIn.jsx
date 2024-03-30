import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
function SignIn(){
    let navigate = useNavigate();
    const [error, setError] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const signIn = (e) =>{
        e.preventDefault();
        if (username != ""){
            if(password !=""){
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
                <div action="#" className='logInBox'>
                    <div className='LoginTitle'>
                        <h1>Agro Pulse</h1>
                    </div>
                    <form action="" className='logInForm'>
                        <p className='error'>{error}</p>
                        <label htmlFor="username">
                            Username
                        </label>
                        <br />
                        <input type="text" id='username' className='usernameInput' onChange={(e)=> setUsername(e.target.value)} required/>
                        <br />
                        <label htmlFor="email">
                            Email
                        </label>
                        <br />
                        <input type="email" id='email' className='usernameInput' onChange={(e)=> setPassword(e.target.value)} required/>
                        <br />
                        <label htmlFor="password">
                            Password
                        </label>
                        <br />
                        <input type="password" id='password' className='usernameInput'/>
                        <br />
                        <button className='signInButton' onClick={signIn}> Sign Up </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SignIn;