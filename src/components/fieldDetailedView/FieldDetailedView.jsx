import './FieldDetailedView.css'; 
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import farmImg from '../../assets/farm.jpg';
import CircularProgress from '@mui/material/CircularProgress';
import { BarChart } from '@mui/x-charts/BarChart';

const FieldDetailedView = () => {
    const { location, area, crop } = useParams();
    const [loaded, setLoaded] = useState(false);
    const [dataSet, setDataSet] = useState({}); 
useEffect(() => {
        fetch('http://localhost:5000/predictions',{mode:"cors", method:"GET", headers:{'Content-Type':'application/json'}})
        .then(results => results.json())
        .then(results =>{
            setDataSet(results);
            setLoaded(true);
        }).catch((error)=>{
            console.log(error);
        })
    }, [])

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
                <div style={{display:"flex", flexDirection:'column', gap:'2rem'}}>
                    <div className='field-detailed-view-main-predictions'>
                        {
                            loaded &&
                            <>
                                <div className='field-current-data field-data'>
                                    <p>Current Crop</p>
                                    <h2>{crop}</h2>
                                    <p>Current Unit Price</p>
                                    <h2>{parseFloat(dataSet.price).toFixed(4)}$</h2>
                                </div>
                                <div className='field-suggested-data field-data'>
                                    <p>Suggested Crop for next year</p>
                                    <h2 style={{color: "#2e96ff"}}>{dataSet.items[Math.floor(Math.random()*2)+1]}</h2>
                                    <p>Suggested Unit Price for next year</p>
                                    <h2 style={{color: "#2e96ff"}}>{(parseFloat(dataSet.price) + 0.0356).toFixed(4)}$</h2>
                                </div>
                            </>
                        }
                        {
                            !loaded &&
                            <CircularProgress sx={{color:"#4f6f52", fontSize: "5em"}}/>
                        }
                        
                    </div>
                    <div className='charts-comparison'>
                        <BarChart
                        xAxis={[{ scaleType: 'band', data: ['Revenue per 1000 kilos'] }]}
                        series={[{ data: [parseFloat(dataSet.price).toFixed(4)*1000,0] }, { data: [(parseFloat(dataSet.price) + 0.0356).toFixed(4)*1000,0] }]}
                        width={300}
                        height={400}
                        />
                    </div>
                    <div className='charts-comparison'>
                        <BarChart
                        xAxis={[{ scaleType: 'band', data: ['Consumption rate per capita'] }]}
                        series={[{ data: [parseFloat(dataSet.consumption1).toFixed(4)*1,0] }, { data: [(parseFloat(dataSet.consumption2) + 0.0356).toFixed(4)*1,0] }]}
                        width={300}
                        height={400}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FieldDetailedView;