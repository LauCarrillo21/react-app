import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setweatherData] = useState({ready: false});

    function handleResponse(response){
        setweatherData({
            ready:true,
            temperature:response.data.temperature.current,
            wind:response.data.wind.speed,
            city:response.data.city,
            description:response.data.condition.description,
            humidity:response.data.temperature.humidity,
            icon:response.data.condition.icon,
            date: "Friday 11:00"
        });
    }

    if (weatherData.ready){
    return (
        <div className="Weather">
     <form>
      <div className="row">
       <div className="col-9">
        <input type="search"
               placeholder="Enter a city..."
               className="form control"
               autoFocus="on"/>
       </div>
       <div className="col-3">
        <input type="submit" value="Search"
               className="btn btn-primary w-100"/>
       </div>
      </div>
      </form>

      <h1>{weatherData.city}</h1>
      <ul>
        <li>{weatherData.date}</li>
        <li>{weatherData.description}</li>
      </ul>

      <div className="row">
       <div className="col-6">
            <img src={weatherData.icon}
            alt={weatherData.description} className="folat-left"/>
            <span className="temperature">{Math.round(weatherData.temperature)}</span>
            <span className="unit">°C</span>
       </div>
       <div className="col-6">
       <ul>
        <li>Precipitation: 15%</li>
        <li>Humidity:{weatherData.humidity}% </li>
        <li>Wind:{weatherData.wind}km/h</li>
       </ul>
       </div>
      </div>
    </div>
    );
    } else {
    const apiKey ="4bfb73a00210a185tacffd8o47774b6a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
    }
}