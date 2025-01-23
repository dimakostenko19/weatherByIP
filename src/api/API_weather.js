import axios from 'axios'
import { getLocation } from './APIIP'

const API_KEY = "trmmfzfjbwlmbx7o8yqmdvbruxamgqheihnslris"

const baseURL = "https://cors-anywhere.herokuapp.com/https://www.meteosource.com/api/v1/free/point"

const getDailyTemp = async()=>{
    const location = await getLocation()
    const locationLat = location.lat
    const locationLon = location.lon    
    const response = await axios.get(baseURL, {
        params:{
            lat: locationLat,
            lon: locationLon,
            sections: "daily",
            key: API_KEY
        }
 })
 return response.data
}

const getHoursTemp = async () => {
    const location = await getLocation()
    const locationLat = location.lat
    const locationLon = location.lon
    const response = await axios.get(baseURL, {
        params:{
            lat: locationLat,
            lon: locationLon,
            sections: "hourly",
            key: API_KEY
        }
    })
    return response.data
}
export {getDailyTemp, getHoursTemp}