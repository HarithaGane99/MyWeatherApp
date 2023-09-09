import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [latitude, setLatitude] = useState('6.9271');
  const [longitude, setLongitude] = useState('79.8612');

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=40e1ca6f47bfa4471a150b08ae9cbed9`;

  useEffect(() => {
    searchLocation();
  }, []); 

  const searchLocation = () => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={latitude}
          onChange={(event) => setLatitude(event.target.value)}
          placeholder="Enter Latitude"
          type="text"
        />
        <input
          value={longitude}
          onChange={(event) => setLongitude(event.target.value)}
          placeholder="Enter Longitude"
          type="text"
        />
        <button onClick={searchLocation}>Get Weather</button>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{((data.main.temp.toFixed() - 32) * 5 / 9).toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="humidity">
              {data.main ? <p className="bold">Humidity: {data.main.humidity}%</p> : null}
            </div>
            <div className="wind">
              {data.wind ? <p className="bold">Wind Speed: {data.wind.speed.toFixed()} MPH</p> : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
