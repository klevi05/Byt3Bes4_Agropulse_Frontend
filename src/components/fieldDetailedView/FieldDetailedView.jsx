import './FieldDetailedView.css'; 
import { useParams } from "react-router-dom";

const FieldDetailedView = () => {
    const { fieldId } = useParams();
    console.log(fieldId);

    return <div>Product</div>;
}

export default FieldDetailedView;