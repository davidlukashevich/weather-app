import axios from "axios";

export const WeatherAPI = {
    getCityInfo(city) {
        return axios.get(`http://api.weatherstack.com/forecast?access_key=897c70b25af47ffbc836d7b9dadd3e4d&query=${city}`);
    }
}