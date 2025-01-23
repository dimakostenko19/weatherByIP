import { useContext, useEffect } from "react";
import { DateContext } from "../context/DateContext";
export default function Location({location}) {

  const {getCurrentDate, currentDate, setCurrentDate} = useContext(DateContext)


  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentDate(getCurrentDate())
    }, 60000)

    return ()=> clearInterval(interval)
  }, [getCurrentDate()])
  return (
    <div>
      <div className="location">
        <h1>{location.city}</h1>
        <div className="location__time">
            {currentDate.time}
        </div>
        <div className="location__data">
            {currentDate.date}
        </div>
        </div>
    </div>
  );
}
