import { useEffect, useState, useContext } from "react";
import { DateContext } from "../context/DateContext";
import { getHoursTemp } from "../api/API_weather";

export default function HourlyItem() {
  const [hourTemp, setHourTemp] = useState([])
  useEffect(()=>{
    const fetchHours = async()=>{
      const response = await getHoursTemp()
      setHourTemp(response.hourly.data.slice(0, 5))
    }
    fetchHours()
  }, [])
  const {formatTime} = useContext(DateContext)

  
  return (
    <div className="time-flex">
      {hourTemp.map((hour)=>(
        <div className="hourly-forecast__item">
        <div className="hourly-forecast__time">
          {formatTime(hour.date)}
        </div>
        <div className="hourly-forecast__icon">
          <img src={`weatherImg/${hour.icon}.png`}/>
        </div>
        <div className="hourly-forecast__temp">
          {hour.temperature} C
          </div>
          <div className="hourly-forecast__icon">
          <img src="img/navigation.png"/>
        </div>
          <div className="hourly-forecast__wind">
            {hour.wind.speed} km/h
          </div>
      </div>
      ))}
    </div>
  );
}