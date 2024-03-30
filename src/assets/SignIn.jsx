import React from 'react'
import {useNavigate} from 'react-router-dom'
function SignIn(){
    let navigate = useNavigate();
    function signIn(){
        navigate('/home')
    }
    return(
        <div className='LogIn'>
            <div className='image'></div>
            <div className='logInFormBox'>
                <div action="#" className='logInBox'>
                    <div className='LoginTitle'>
                        <h1>Agro Pulse</h1>
                    </div>
                    <form action="" className='logInForm'>
                        <label htmlFor="username">
                            Username
                        </label>
                        <br />
                        <input type="text" id='username' className='usernameInput' required/>
                        <br />
                        <label htmlFor="email">
                            Email
                        </label>
                        <br />
                        <input type="email" id='email' className='usernameInput' required/>
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