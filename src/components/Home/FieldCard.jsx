import './FieldCard.css';
import Leaf from '../../assets/Logo-leaf.svg';
import { Link } from 'react-router-dom';


const FieldCard = (props) => {
    const {country, area, crop} = props.data;
    const path = `/home/field/${country}/${area}/${crop}`;
    
    return(
        <Link to={path} className="field-card" style={{textDecoration: "none", color: "black"}}>
                <div className="field-picture">
                    <img src={Leaf} alt="" />
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