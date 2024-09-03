import s from './WeatherAPP.module.css';
import tempMax from './../../assets/img/tempMax.png';
import tempMin from './../../assets/img/tempMin.png';
import wind from './../../assets/img/wind.png';
import sky from './../../assets/img/sky.png';
import water from './../../assets/img/water.png';
import sunny from './../../assets/img/sunny.png';
import search from './../../assets/img/search.svg';
import moon from './../../assets/img/moon.png';
import Details from './Details';
import Forecast from './Forecast';


const WeatherSearch = (props) => {
    return (
        <div className={s.weather_search}>
            <aside className={s.weather_info}>
                <div className={s.city_search}>
                    <input className={s.input_search} placeholder='Search Location...' />
                    <img src={search} className={s.search_img} />
                </div>
                <div className={s.details}>
                    <div className={s.title_details}>Weather Details</div>
                    <div className={s.weather_subtitle}>clear sky</div>
                    <div className={s.weather_details}>
                        <Details title='Temp Max' data='27°' img={tempMax} classNames={s.temp_details} />
                        <Details title='Temp Min' data='21°' img={tempMin} classNames={s.temp_details} />
                        <Details title='Humidity' data='46%' img={water} />
                        <Details title='Cloudy' data='62%' img={sky} />
                        <Details title='Wind' data='8km/h' img={wind} />
                    </div>
                </div>
                <div className={s.line}></div>
                <div className={s.forecast}>
                    <div className={s.title_details}>Weather Forecast</div>
                    <div className={s.weather_forecast}>
                        <Forecast time='18:00' subtitle='Clouds' data='21°' img={sunny} />
                        <Forecast time='21:00' subtitle='Clouds' data='25°' img={sunny} />
                        <Forecast time='00:00' subtitle='Clouds' data='22°' img={sky} />
                        <Forecast time='03:00' subtitle='Clear' data='19°' img={moon} />
                        <Forecast time='06:00' subtitle='Clear' data='20°' img={moon} />
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default WeatherSearch;