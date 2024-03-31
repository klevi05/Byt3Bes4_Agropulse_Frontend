import { useEffect } from "react";
import cookies from 'js-cookie'
import "./Home.css"
import logo from '../../assets/logo.svg'
import { useNavigate, Link } from "react-router-dom";
import FieldCard from "./FieldCard";
import { useState } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FallBackProfile from '../../assets/no_profile_pic.png'
import CircularProgress from '@mui/material/CircularProgress';

function Home(){
    const navigate = useNavigate();
    const [expanded, setExpaned] = useState(false); 
    const [loaded, setLoaded] = useState(false);
    const [content, setContent] = useState({}); 

    useEffect(()=>{
        if(cookies.get('name') == undefined){
            navigate('/')
        }

        setTimeout(()=>{setLoaded(true)}, 1000);
    }, [])

    function refreshPage() {
        cookies.remove('name')
        window.location.reload(false);
    }

    const dataSet = [
            {
                id: 1,
                location: "Kampala",
                area: "10",
                crop: "Rice"
            },
            {
                id: 2,
                location: "Durres",
                area: "22",
                crop: "Maize"
            },
            {
                id:3,
                location: "Kigali",
                area: "15",
                crop: "Beans"
            },
            {
                id: 4,  
                location: "Kigali",
                area: "15",
                crop: "Beans"
            },
            {
                id: 5,
                location: "Kigali",
                area: "15",
                crop: "Beans"
            }
        ]

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
                                <img src={FallBackProfile} alt="" />
                            </div>
                            <div className="profile-details-container">
                                <h3>{cookies.get('name')}</h3>
                            </div>
                        </div>  
                        <Link to="/addField">
                            <div className="add-field">
                                <AddCircleIcon sx={{color: "#4F6F52", fontSize:"3em"}}/>
                                <h3>Add Field</h3>
                            </div>
                        </Link>
                    </div>
                    <button onClick={refreshPage}>Sign Out</button>
                </div>
            }

            { !expanded &&
                <div className="navbar-closed">
                    <div className="profile-logo-container" onClick={() => {setExpaned(!expanded);}}>
                    <img src={FallBackProfile} alt="" />
                    </div>
                </div>
            }

            { loaded &&
                <div className="dashboard">
                    {dataSet.map((data) => (<FieldCard data={data} key={data.id}/>))}
                </div>
            }

            { !loaded && 
                <div className="dashboard" style={{height:"100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <CircularProgress sx={{color:"#4f6f52", fontSize: "5em"}}/>
                </div>
            }
        </div>
    );
}
export default Home;