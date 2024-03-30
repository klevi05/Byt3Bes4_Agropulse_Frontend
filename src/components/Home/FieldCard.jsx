import './FieldCard.css';
import Logo from '../../assets/logo.svg';


const FieldCard = (props) => {
    const {location, area, crop} = props.data;
    return(
        <div className="field-card">
            <div className="field-picture">
                <img src={Logo} alt="" />
            </div>
            <div className="field-details">
                <p>Location</p>
                <h1>{location}</h1>
                <p>Area</p>
                <h2>{area}</h2>
                <p>Crop</p>
                <h2>{crop}</h2>
            </div>
        </div>

    );
}

export default FieldCard;