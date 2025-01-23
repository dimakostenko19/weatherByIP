import { useState, useEffect } from 'react';
import { getDailyTemp } from '../api/API_weather';
export default function WeatherDetail() {
    const [weatherData, setWeatherData] =  useState({
        daily: {
            data: []
        }
    });
    useEffect(()=>{
      const fetchData = async ()=>{
        const response = await getDailyTemp();
        setWeatherData(response);
      }
      fetchData()
      const interval = setInterval(()=>{
        fetchData()
      }, 3600000)
      return ()=>clearInterval(interval)
    }, [])
    if (!weatherData.daily.data || weatherData.daily.data.length === 0) {
        return <p>Loading weather data...</p>;
      }
    const dayData = weatherData.daily.data[0]
    const dayDate = dayData.all_day;
  return (
    
      <div className="weather-details">
        <div className="weather__temp">
            <span>{dayDate.temperature}C</span>
        </div>
        <div className="weather__status">
            <img src={`weatherImg/${weatherData.daily.data[0].icon}.png`}/>
        </div>
        <div className="weather__sh">
            <div className="weather__wind">
            <img src="img/wind.png"/>
            <span>{weatherData.daily.data[0].all_day.wind.speed} km/h</span>
            <span style={{fontSize: "12px"}}>Wind Speed</span>
            </div>
        </div>
        </div>
  );
}