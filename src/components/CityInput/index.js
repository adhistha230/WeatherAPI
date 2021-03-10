import React from 'react';
import { Form ,Button} from 'react-bootstrap';

const CityInput = ({city,setCity,fetchCityWeather}) => {
    // const [city, setCity] = React.useState("");
    const [error, setError] = React.useState("");

    const handleInputChange=(event)=>{
        setCity(event.target.value);
    };
    const handleSubmit=()=>{
        if(!city){
            setError("Field is empty");
        }
        else{
            setError("");
            //Make API call
            fetchCityWeather();
        }
    };
 
    return (
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>City</Form.Label>
    <Form.Control
    value={city}
    type="text" 
    placeholder="Enter city"
     onChange={handleInputChange} 
     />
     <p className="text-danger">{error}</p>
  </Form.Group>

  
  <Button variant="primary" onClick={handleSubmit}>Submit</Button>
</Form>
    );
};

export default CityInput;