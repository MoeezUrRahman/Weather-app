import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/currentweather/file";
import Forecast from "./components/forecast/forecast";
import { WEATHER_API_URL } from "./api";
import { WEATHER_API_KEY } from "./api";
import { useState } from "react";

function App() {
  const [current, setCurrentweather] = useState(null);
  const [forecastweather, setForecast] = useState(null);

  const handleOnSearchChange = (searchdata) => {
    const [lat,lon] = searchdata.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse =await response[0].json();
        const forecastResponse =await response[1].json();

        setCurrentweather({ city: searchdata.label, ...weatherResponse });
        setForecast({ city: searchdata.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  console.log(current);
  console.log(forecastweather);
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {current && <CurrentWeather data={current} />}
      {forecastweather && <Forecast data={forecastweather} />}
    </div>
  );
}

export default App;
