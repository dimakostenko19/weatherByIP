import { useState, useContext, useEffect } from 'react';
import { DateContext } from '../context/DateContext';
import {getDailyTemp} from '../api/API_weather'
export default function DayItem() {
  const [daily, setDaily] = useState({ daily: { data: [] } });
  const {formatDate} = useContext(DateContext)
  
  useEffect(()=>{
    const fetchDaily = async()=>{
      const response = await getDailyTemp()
      setDaily(response)
    }
    fetchDaily()
    const interval = setInterval(()=>{
      fetchDaily()
    }, 3600000 )
    return ()=> clearInterval(interval)
  }, [])
  const dayDate = daily.daily.data.slice(0, 5)

  return (
    <div className='day-forecast__item'>
      {dayDate.map((day)=>(
        <div>
          <img src={`weatherImg/${day.icon}.png`}/>
          <span>{day.all_day.temperature} C</span>
          <span>{formatDate(day.day)}</span>
        </div>        
          ))} 
    </div>
  );
}