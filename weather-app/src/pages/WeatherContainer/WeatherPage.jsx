import WeatherInformation from "./WeatherInformation";
import WeatherSearch from "./WeatherSearch";
import s from './WeatherAPP.module.css';

const WeatherPage = (props) => {
    debugger
    return (
        <div className={s.weather}>
            <div className={s.weather_page_information}><WeatherInformation city={props.city} localTime={props.localTime} tempAverage={props.tempAverage} /></div>
            <div className={s.weather_page_search}><WeatherSearch 
            weatherDescription={props.weatherDescription} tempMax={props.tempMax} tempMin={props.tempMin} 
            humidity={props.humidity} cloudy={props.cloudy} wind={props.wind} /></div>
        </div>
    );
}

export default WeatherPage;