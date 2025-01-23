const getLocation = async()=>{
    const response = await fetch('http://ip-api.com/json/?fields=lat,lon,city')
    const json = await response.json()
    return json
}

export {getLocation}