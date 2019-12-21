import axios from 'axios';

const API_KEY = '2726080624e4d674b6f6ad626bf08762';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?&APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = async (city)=> {
  const url = `${ROOT_URL}&q=${city}&units=metric`;
  
  const request = await axios.get(url);
  console.log(request.data); 
  
  return {
    type: FETCH_WEATHER,
    payload: request
  }
};
