import { useEffect } from "react";
import WeatherPage from "./WeatherPage";
import { connect } from "react-redux";
import { setWeatherInfoThunkCreator } from "../../redux/reducers/weather-reducer";
import Loader from "../../Loader/Loader";

const WeatherContainer = (props) => {
    useEffect(() => {
        props.setWeather('Brest');
    }, []);

    const submitCity = (formData) => {
        props.setWeather(formData.city);
    }

    if (props.isFetching) {
        return <Loader />
    }

    return (
        <div>
            <div><WeatherPage {...props} submitCity={submitCity} /></div>
        </div>
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
        wind: state.weather.wind,
        isFetching: state.weather.isFetching,
        icon: state.weather.icons,
        background: state.weather.background,
        error: state.weather.error
    }
}

export default connect(mapStateToProps, { setWeather: setWeatherInfoThunkCreator })(WeatherContainer);