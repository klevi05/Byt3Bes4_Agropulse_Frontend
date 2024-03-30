import './FieldCreator.css';
import {useState} from 'react';
const Question = ({count, setArea, setCountry, setCrop}) => {
    
    if (count === 1) {
        return (
            <div className="step-questions">
                <form>
                    <h2>Country</h2>
                    <input name="country" type="text" onChange={(e)=>setCountry(e.target.value)}/>
                </form>
            </div>
        );
    }else if (count === 2) {
        return(
            <div className="step-questions">
                <form>
                    <h2>Area</h2>
                    <input name="area" type="number" onChange={(e)=>setArea(e.target.value)}/>
                </form>
            </div>
        );
    }else if (count ===3){
        return(
            <div className="step-questions">
                <form>
                    <h2>Crop</h2>
                    <input name="crop" type="text" onChange={(e)=> setCrop(e.target.value)}/>
                </form>
            </div>
        );
    }
    
}

export default Question;
