import React from 'react'
import {Link} from 'react-router-dom'
function Login(){
    function login(){
        console.log("hello")
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
                        <input type="text" id='username' className='usernameInput'/>
                        <br />
                        <label htmlFor="password">
                            Password
                        </label>
                        <br />
                        <input type="password" id='password' className='usernameInput'/>
                        <br />
                        <button className='logInButton' onClick={login}>Log In</button>
                        <p className='signUpFunction'>If you dont have an account <Link className='linkLogIn' to='/signIn'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;