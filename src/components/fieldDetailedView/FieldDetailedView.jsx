import './FieldDetailedView.css'; 
import { useParams } from "react-router-dom";

const FieldDetailedView = () => {
    const { location, area, crop } = useParams();
    return(
        <div className="field-detailed-view">
            <div className='field-detailed-view-header'>

            </div>
            <div className='field-detailed-view-info-container'>
                <div className='field-detailed-view-main-info'>
                    <p>Country</p>
                    <h1>{location}</h1>
                    <p>Area</p>
                    <h2>{area} ha</h2>
                </div>
                <div className='field-detailed-view-main-predictions'>
                    <div>

                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FieldDetailedView;