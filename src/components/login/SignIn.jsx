import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import logo from '../../assets/logo.svg'
import "./login.css"
function SignIn(){
    const id = Math.random(1000000000000)
    let navigate = useNavigate();
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const signIn = (e) =>{
        e.preventDefault();
        if (username != ""){
            if(email !="" && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) ){
                if(password!=""){
                    fetch('http://127.0.0.1:5000/signUp',{mode:"cors", method:"POST", headers:{'Content-Type':'application/json'}, body: JSON.stringify({
                        "_id": id,
                        "name": username,
                        "email": email,
                        "password": password
                })})
                .then((result)=>{
                    return result.json();
                    })
                .then((result)=>{
                    if(result.status_code == 404){
                        setError("This username is been registered before")
                    }else{
                        if(result.status_code == 401){
                            setError("This email already exists")
                        }else{
                            navigate('/')
                        }
                    }
                }).catch((error) => {
                    console.log(error);
                })
                }else{
                    setError('Please fill the fields below')
                }
            }else{
                setError('This is not an email')
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
                        <img className='logoLog' src={logo} alt="logo" />
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
                        <input type="email" id='email' className='usernameInput' onChange={(e)=> setEmail(e.target.value)} required/>
                        <br />
                        <label htmlFor="password">
                            Password
                        </label>
                        <br />
                        <input type="password" id='password' className='usernameInput' onChange={(e)=> setPassword(e.target.value)}/>
                        <br />
                        <button className='logInButton' onClick={signIn}> Sign Up </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SignIn;