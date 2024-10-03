import "./file2.css";

const CurrentWeather = ({data}) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="description">{data.weather[0].description}</p>
        </div>
        <img
          src= {`icons/${data.weather[0].icon}.png`}
          className="weather-image"
          alt="Weather"
        ></img>
      </div>

      <div className="bottom">
        <p className="Temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
        <div className="parameter-row">
          <span className="parameter-name">Feels like</span>
          <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
        </div>
        <div className="parameter-row">
          <span className="parameter-name">Wind</span>
          <span className="parameter-value">{data.wind.speed}ms</span>
        </div>
        <div className="parameter-row">
          <span className="parameter-name">Humidity</span>
          <span className="parameter-value">{data.main.humidity}%</span>
        </div>
        <div className="parameter-row">
          <span className="parameter-name">Pressure</span>
          <span className="parameter-value">{data.main.pressure}Pa</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
