import Login from './components/login/Login'
import SignIn from './components/login/SignIn';
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
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
