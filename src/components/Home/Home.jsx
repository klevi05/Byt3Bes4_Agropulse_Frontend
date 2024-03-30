import { useEffect } from "react";
import cookies from 'js-cookie'
import "./Home.css"
import logo from '../../assets/logo.svg'
import { useNavigate, Link } from "react-router-dom";
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
                <div className="funcionalities">
                    <img className="homeLogo" src={logo} alt="logo" />
                    <Link to={'/home/newField'}><button className="newFieldButton">New fields</button></Link>
                </div>
                <div className="logOutBox">
                    <button className="logOutButton" type="submit" onClick={refreshPage} > Log Out</button>
                </div>
            </div>

            <div className="page">
                <div className="pageTitleBox">
                    <div className="pageTitle">
                        <h1>Your current Data</h1>
                    </div>
                </div>
                <div className="bigDataBox">
                    <div className="dataBox">
                        hello
                    </div>
                    <div className="dataBox">
                        hello
                    </div>
                    <div className="dataBox">
                        hello
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;