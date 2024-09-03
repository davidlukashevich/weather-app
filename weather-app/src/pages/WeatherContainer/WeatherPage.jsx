import WeatherInformation from "./WeatherInformation";
import WeatherSearch from "./WeatherSearch";
import s from './WeatherAPP.module.css';

const WeatherPage = (props) => {
    return (
        <div className={s.weather}>
            <div className={s.weather_page_information}><WeatherInformation /></div>
            <div className={s.weather_page_search}><WeatherSearch /></div>
        </div>
    );
}

export default WeatherPage;