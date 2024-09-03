import { WeatherAPI } from "../api/api";

const SET_WEATHER = 'SET_WEATHER';

let initialState = {}

const weatherReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case SET_WEATHER: {
            return {
                ...state,
                ...action.data
            }
        }

        default: {
            return state;
        }
    }
}

export const setWeatherInfoActionCreator = (data) => {
    debugger
    return {
        type: SET_WEATHER,
        data
    }
}

export const setWeatherInfoThunkCreator = (city) => async (dispatch) => {
    let response = await WeatherAPI.getCityInfo(city);
    const info = response.data;
    const key = Object.keys(info.forecast);
    let newData = {
        city: info.location.name,
        country: info.location.country,
        localTime: info.location.localtime,
        weatherDescription: info.current.weather_descriptions[0],
        tempMax: info.forecast[key].maxtemp,
        tempMin: info.forecast[key].mintemp,
        tempAverage: info.forecast[key].avgtemp,
        humidity: info.current.humidity,
        cloudy: info.current.cloudcover,
        wind: info.current.wind_speed
    }

    if (response.data.succes !== 'false') {
        dispatch(setWeatherInfoActionCreator(newData));
    }
}

export default weatherReducer;