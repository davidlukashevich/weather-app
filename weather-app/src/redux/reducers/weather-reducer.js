import { WeatherAPI } from "../api/api";
import s from '../../pages/WeatherContainer/WeatherAPP.module.css';
import fog from '../../assets/img/icons/fog.png';
import moon from '../../assets/img/icons/moon.png';
import partlyCloudyMorning from '../../assets/img/icons/partlyCloudyMorning.png';
import partlyCloudyNight from '../../assets/img/icons/partlyCloudyNight.png';
import rain from '../../assets/img/icons/rain.png';
import sky from '../../assets/img/icons/sky.png';
import snow from '../../assets/img/icons/snow.png';
import storm from '../../assets/img/icons/storm.png';
import sunny from '../../assets/img/icons/sunny.png';

const SET_WEATHER = 'SET_WEATHER';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const SET_ERROR = 'SET_ERROR';
const SET_ANIMATION = 'SET_ANIMATION';


let initialState = {
    isFetching: false,
    error: null,
    background: null,
    icon: null
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

        case SET_ANIMATION: {
            return {
                ...state,
                background: action.classBack,
                icon: action.icon
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

export const setAnimationDescriptionActionCreator = (classBack, icon) => {
    return {
        type: SET_ANIMATION,
        classBack,
        icon
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
            sunriseTime: info.forecast[key].astro.sunrise,
            sunsetTime: info.forecast[key].astro.sunset,
            moonriseTime: info.forecast[key].astro.moonrise,
            moonsetTime: info.forecast[key].astro.moonset
        }
        dispatch(setWeatherInfoActionCreator(newData));
        dispatch(setBackgroundThunkCreator(newData.weatherDescription, newData.localTime));
    } else {
        dispatch(setErrorActionCreator('Such a city does not exist'));
    }
    dispatch(toogleIsFetchingActionCreator(false));
}

export const setBackgroundThunkCreator = (description, localTime) => (dispatch) => {
    debugger
    let arr = localTime.split(' ');
    let local = arr[1].split(':');
    let descs = description.split(',');
    let desc = descs[0];

    if ((local[0] >= 19 || local[0] <= 6) && (desc === "Overcast" || desc === "Overcast " || desc === "Partly Cloudy" || desc === "Partly Cloudy " || desc === "Partly cloudy")) {
        dispatch(setAnimationDescriptionActionCreator(s.clouds_night, partlyCloudyNight));
    } else if ((local[0] >= 20 || local[0] <= 6) && (desc === "Sunny" || desc === "Clear" || desc === "Clear " || desc === "Haze" || desc === "Mist" || desc === "Fog")) {
        dispatch(setAnimationDescriptionActionCreator(s.night, moon));
    } else if (desc === "Rain Shower" || desc === "Light Rain Shower" || desc === "Light Rain" || desc === "Moderate rain" || desc === "Patchy rain nearby" || desc === "Light Drizzle") {
        dispatch(setAnimationDescriptionActionCreator(s.rain, rain));
    } else if (desc === "Overcast" || desc === "Overcast ") {
        dispatch(setAnimationDescriptionActionCreator(s.clouds, sky));
    } else if (desc === "Partly Cloudy" || desc === "Partly Cloudy " || desc === "Partly cloudy") {
        dispatch(setAnimationDescriptionActionCreator(s.clouds, partlyCloudyMorning));
    } else if (desc === "Sunny" || desc === "Clear" || desc === "Clear ") {
        dispatch(setAnimationDescriptionActionCreator(s.clear, sunny));
    } else if (desc === "Haze" || desc === "Mist" || desc === "Fog") {
        dispatch(setAnimationDescriptionActionCreator(s.mist, fog));
    } else if (desc === "Rain With Thunderstorm") {
        dispatch(setAnimationDescriptionActionCreator(s.storm, storm));
    } else if (desc === "Snow") {
        dispatch(setAnimationDescriptionActionCreator(s.snow, snow));
    }
}

export default weatherReducer;