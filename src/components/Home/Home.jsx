import { useEffect } from "react";
import cookies from 'js-cookie'
import "./Home.css"

import { useNavigate } from "react-router-dom";
function Home(){
    const navigate = useNavigate()
    useEffect(()=>{
        if(cookies.get('name') == undefined){
            navigate('/')
        }else{
            console.log("hello")
        }
    })
    function refreshPage() {
        cookies.remove('name')
        window.location.reload(false);
      }
    return(
        <div className="Home">
            <div className="nav">
                <h1>h</h1>
            </div>
            <div className="page">
                <h1>page</h1>
            </div>
            <button type="submit" onClick={refreshPage} > Button</button>
        </div>
    )
}
export default Home;