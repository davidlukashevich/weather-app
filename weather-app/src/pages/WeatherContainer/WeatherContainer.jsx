import { useEffect } from "react";
import WeatherPage from "./WeatherPage";
import { connect } from "react-redux";
import { setWeatherInfoThunkCreator } from "../../redux/reducers/weather-reducer";

const WeatherContainer = (props) => {

    useEffect(() => {
        props.setWeather('London');
    }, []);

    return (
        <div><WeatherPage {...props} /></div>
    );
}

let mapStateToProps = (state) => {
    return {
        city: state.weather.city,
        country: state.weather.country,
        localTime: state.weather.localTime,
        weatherDescription: state.weather.weatherDescription,
        tempMax: state.weather.tempMax,
        tempMin: state.weather.tempMin,
        tempAverage: state.weather.tempAverage,
        humidity: state.weather.humidity,
        cloudy: state.weather.cloudy,
        wind: state.weather.wind
    }
}

export default connect (mapStateToProps, {setWeather:setWeatherInfoThunkCreator})(WeatherContainer);