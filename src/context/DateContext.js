import { createContext } from "react";
import { useState } from "react";
export const DateContext = createContext(null)

export const DateProvider = ({children})=>{
  const getCurrentDate = () => {
    const date = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const dayName = days[date.getDay()];
    const dayNumber = date.getDate();
    const monthName = months[date.getMonth()];
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return {
      time: `${hours}:${minutes}`,
      date: `${dayName}, ${dayNumber} ${monthName}`
    }
  };
  const formatDate = (dateString)=>{
    const date = new Date(dateString);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const dayName = days[date.getDay()];
    const dayNumber = date.getDate();
    const monthName = months[date.getMonth()];
    return `${dayName} ${dayNumber} ${monthName}`
  }
  const formatTime = (timeString) => {
    const time = new Date(timeString)
    const hours = time.getHours().toString().padStart(2, '0')
    const minutes = time.getMinutes().toString().padStart(2, '0')

    return `${hours}:${minutes}`
  }
  const [currentDate, setCurrentDate] = useState(getCurrentDate())
  return (
    <DateContext.Provider value={{ getCurrentDate, currentDate, setCurrentDate, formatDate, formatTime }}>
        {children}
      </DateContext.Provider>
    )
  }