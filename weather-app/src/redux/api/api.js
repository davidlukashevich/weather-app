import axios from "axios";

const instance = axios.create({
    baseURL: 'http://api.weatherstack.com/forecast?access_key=897c70b25af47ffbc836d7b9dadd3e4d'
});

export const WeatherAPI = {
    getCityInfo(city) {
        return instance.get(`&query=${city}`);
    }
}