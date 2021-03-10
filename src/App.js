import React from 'react';
import './App.css';
import CityInput from "./components/CityInput"
import CityWhether from "./components/CityWhether"

function App() {
  const [city, setCity] = React.useState("");
  const [CityWhether, setCityWeather] = React.useState({});

  const fetchCityWeather=()=>{
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47"
    )
    .then((res) => res.json())
    .then((result) =>{
    // console.log("Result is result",result);
    setCityWeather(result);
    });
  }

  return (
    <>
    <CityInput city={city} setCity={setCity} fetchCityWeather={fetchCityWeather}/>
    {/* <CityWhether /> */}
    </>
  );
}

export default App;
