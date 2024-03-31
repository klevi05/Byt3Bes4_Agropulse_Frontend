import './FieldCard.css';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';


const FieldCard = (props) => {
    const {location, area, crop} = props.data;
    const path = `/home/field/${location}/${area}/${crop}`;

    return(
        <Link to={path} className="field-card" style={{textDecoration: "none", color: "black"}}>
                <div className="field-picture">
                    <img src={Logo} alt="" />
                </div>
                <div className="field-details">
                    <p style={{color:"#4f6f52"}}>Location</p>
                    <h1>{country}</h1>
                    <p style={{color:"#4f6f52"}}>Area</p>
                    <h2>{area}</h2>
                    <p style={{color:"#4f6f52"}}>Current Crop</p>
                    <h2>{crop}</h2>
                </div>
        </Link>

    );
}

export default FieldCard;