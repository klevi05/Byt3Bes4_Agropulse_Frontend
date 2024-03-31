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
    const login= (e) =>{
        e.preventDefault()
        if (username != ""){
            if(password !=""){
                Cookies.set('name',username)
                fetch('http://127.0.0.1:5000/logIn',{mode:"cors", method:"POST", headers:{'Content-Type':'application/json'}, body: JSON.stringify({
                    "name": username,
                    "password": password
                })})
                .then((result)=>{
                    return result.json();
                    })
                .then((result)=>{
                    if(result.status_code == 404){
                        setError("This username is not registered")
                    }else{
                        if(result.status_code == 401){
                            setError("Incorrect password")
                        }else{
                            navigate('/home')
                        }
                    }
                }).catch((error) => {
                    console.log(error);
                })

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