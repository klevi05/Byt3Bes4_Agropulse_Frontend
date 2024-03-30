import { useEffect } from "react";
import cookies from 'js-cookie'
import "./Home.css"
import logo from '../../assets/logo.svg'
import { useNavigate, Link } from "react-router-dom";
import FieldCard from "./FieldCard";
import { useState } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function Home(){
    const navigate = useNavigate();
    const [expanded, setExpaned] = useState(false); 

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

    const data = {
        location: "Kampala",
        area: "10",
        crop: "Rice"
    }

    return(
        <div className="home">
            { expanded == true  && 
                <div className="navbar">
                    <div>
                        <div>
                            <ArrowBackIosNewIcon onClick={() => {setExpaned(!expanded)}} sx={{cursor: "pointer", "&:hover" : {backgroundColor: "rgb(245, 245, 245)"}, padding: "0.5em"}}/>
                        </div>
                        <div className="logo-container">
                            <img src={logo} alt="" />
                        </div>
                        <div className="profile-container">
                            <div className="profile-logo-container">
                            </div>
                            <div className="profile-details-container">
                                <h3>Name Surname</h3>
                            </div>
                        </div>  
                    </div>
                    <button onClick={refreshPage}>Sign Out</button>
                </div>
            }

            { !expanded &&
                <div className="navbar-closed">
                    <div className="profile-logo-container" onClick={() => {setExpaned(!expanded);}}>
                    </div>
                </div>
            }

            <div className="dashboard">

                <FieldCard data={data} />
                <FieldCard data={data} />
                <FieldCard data={data} />
                <FieldCard data={data} />
                <FieldCard data={data} />
                <FieldCard data={data} />
                <FieldCard data={data} />
            </div>
        </div>
    );
}
export default Home;