import axios from 'axios';
const API_KEY = '29b25605178ac1bc5d95ae5dd0e23683';
const Root_url = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// const Root_url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

    const url = `${Root_url}&q=${city},us`;

    const request = axios.get(url);
    // .then(res => console.log(res));

    return {
        type:FETCH_WEATHER,
        payload:request
    }
} 
