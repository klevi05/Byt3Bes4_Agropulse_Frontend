import Login from './assets/Login'
import SignIn from './assets/SignIn';
import Home from './assets/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
