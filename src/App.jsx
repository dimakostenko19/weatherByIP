import './App.scss';
import DayItem from './components/DayItem';
import HourlyItem from './components/HourlyItem';
import WeatherDetail from './components/WeatherDetails';
import Location from './components/Location';

import { getTemp } from './api/API_weather';
import { getLocation } from './api/APIIP';
import { DateProvider } from './context/DateContext';
import { useState, useEffect } from 'react';

function App() {
  const [loc, setLoc] = useState([])

  useEffect(()=>{
    const fetchLocation = async()=>{
      const response = await getLocation()
      console.log(response);
      setLoc(response)
    }
    fetchLocation()
  }, [])
  return (<DateProvider>
    
      <div className="App">
        <div className="container">
          <main>
            <div className="wrapper-detail">
              <div className="grid-container">
                <Location location={loc}/>
                <WeatherDetail/>
                <div className="day-forecast">
                    <h3>5 Days Forecast:</h3>
                    <div>
                      <DayItem/>
                    </div>
                </div>
                <div className="hour-forecast-title">
                  <h3>Hourly Forecast:</h3>
                  <div className='hourly-forecast'>
                    <HourlyItem/>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
  </DateProvider>
  );
}

export default App;
