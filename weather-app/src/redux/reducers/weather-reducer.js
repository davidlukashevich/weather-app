import { WeatherAPI } from "../api/api";
import s from '../../pages/WeatherContainer/WeatherAPP.module.css';

const SET_WEATHER = 'SET_WEATHER';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const SET_ERROR = 'SET_ERROR';
const SET_BACKGROUND = 'SET_BACKGROUND';


let initialState = {
    isFetching: false,
    error: null,
    background: null
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER: {
            return {
                ...state,
                ...action.data,
                error: null
            }
        }

        case TOOGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case SET_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }

        case SET_BACKGROUND: {
            return {
                ...state,
                background: action.classBack
            }
        }

        default: {
            return state;
        }
    }
}

export const setWeatherInfoActionCreator = (data) => {
    return {
        type: SET_WEATHER,
        data
    }
}

export const toogleIsFetchingActionCreator = (isFetching) => {
    return {
        type: TOOGLE_IS_FETCHING,
        isFetching
    }
}

export const setErrorActionCreator = (error) => {
    return {
        type: SET_ERROR,
        error
    }
}

export const setBackgroundActionCreator = (classBack) => {
    return {
        type: SET_BACKGROUND,
        classBack
    }
}

export const setWeatherInfoThunkCreator = (city) => async (dispatch) => {
    dispatch(toogleIsFetchingActionCreator(true));
    let response = await WeatherAPI.getCityInfo(city);

    if (response.data.success !== false) {
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
            wind: info.current.wind_speed,
            icons: info.current.weather_icons[0]
        }
        dispatch(setWeatherInfoActionCreator(newData));
        dispatch(setBackgroundThunkCreator(newData.weatherDescription, newData.localTime));
    } else {
        dispatch(setErrorActionCreator('Such a city does not exist'));
    }
    dispatch(toogleIsFetchingActionCreator(false));
}

export const setBackgroundThunkCreator = (description, localTime) => (dispatch) => {
    let arr = localTime.split(' ');
    let local = arr[1].split(':');
    let descs = description.split(',');
    let desc = descs[0];

    if ((local[0] >= 20 || local[0] <= 6) && (desc === "Overcast" || desc === "Partly Cloudy" || desc === "Partly Cloudy " || desc === "Partly cloudy")) {
        dispatch(setBackgroundActionCreator(s.clouds_night));
    } else if ((local[0] >= 20 || local[0] <= 6) && (desc === "Sunny" || desc === "Clear" || desc === "Clear " || desc === "Haze" || desc === "Mist")) {
        dispatch(setBackgroundActionCreator(s.night));
    } else if (desc === "Rain Shower" || desc === "Light Rain Shower" || desc === "Light Rain" || desc === "Moderate rain" || desc === "Patchy rain nearby") {
        dispatch(setBackgroundActionCreator(s.rain));
    } else if (desc === "Overcast" || desc === "Partly Cloudy" || desc === "Partly Cloudy " || desc === "Partly cloudy") {
        dispatch(setBackgroundActionCreator(s.clouds));
    } else if (desc === "Sunny" || desc === "Clear" || desc === "Clear ") {
        dispatch(setBackgroundActionCreator(s.clear));
    } else if (desc === "Haze" || desc === "Mist") {
        dispatch(setBackgroundActionCreator(s.mist));
    } else if (desc === "Rain With Thunderstorm") {
        dispatch(setBackgroundActionCreator(s.storm));
    } else if (desc === "Snow") {
        dispatch(setBackgroundActionCreator(s.snow));
    }
}

export default weatherReducer;