import { WeatherAPI } from "../api/api";

const SET_WEATHER = 'SET_WEATHER';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const SET_ERROR = 'SET_ERROR';

let initialState = {
    isFetching: false,
    error: null
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
            wind: info.current.wind_speed
        }
        dispatch(setWeatherInfoActionCreator(newData));
    } else {
        dispatch(setErrorActionCreator('Such a city does not exist'));
    }
    dispatch(toogleIsFetchingActionCreator(false));
}

export default weatherReducer;