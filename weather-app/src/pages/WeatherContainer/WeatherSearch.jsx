import s from './WeatherAPP.module.css';
import tempMax from './../../assets/img/icons/tempMax.png';
import tempMin from './../../assets/img/icons/tempMin.png';
import wind from './../../assets/img/icons/wind.png';
import sky from './../../assets/img/icons/sky.png';
import water from './../../assets/img/icons/water.png';
import sunny from './../../assets/img/icons/sunny.png';
import search from './../../assets/img/icons/search.svg';
import moon from './../../assets/img/icons/moon.png';
import sunset from '../../assets/img/icons/sunset.png';
import moonset from '../../assets/img/icons/moonset.png';
import Details from './Details';
import { Field, Form, Formik } from 'formik';
import Astronomy from './Astronomy';

const WeatherSearch = (props) => {
    return (
        <div className={s.weather_search}>
            <aside className={s.weather_info}>
                <Formik initialValues={{ city: null }} onSubmit={props.submitCity}>
                    <Form>
                        <div className={s.city_search}>
                            <Field className={s.input_search} placeholder='Search Location...' type={'text'} name={'city'} value={props.city} />
                            <img src={search} className={s.search_img} />
                        </div>
                    </Form>
                </Formik>
                <div className={s.error}>{props.error}</div>
                <div className={s.details}>
                    <div className={s.title_details}>Weather Details</div>
                    <div className={s.weather_subtitle}>{props.weatherDescription}</div>
                    <div className={s.weather_details}>
                        <Details title='Temp Max' data={`${props.tempMax}°`} img={tempMax} classNames={s.temp_details} />
                        <Details title='Temp Min' data={`${props.tempMin}°`} img={tempMin} classNames={s.temp_details} />
                        <Details title='Humidity' data={`${props.humidity}%`} img={water} />
                        <Details title='Cloudy' data={`${props.cloudy}%`} img={sky} />
                        <Details title='Wind' data={`${props.wind}km/h`} img={wind} />
                    </div>
                </div>
                <div className={s.line}></div>
                <div className={s.forecast}>
                    <div className={s.title_details}>Weather Astronomy</div>
                    <div className={s.weather_forecast}>
                        <Astronomy time={props.sunriseTime} subtitle='Sunrise' img={sunny} />
                        <Astronomy time={props.sunsetTime} subtitle='Sunset' img={sunset} />
                        <Astronomy time={props.moonriseTime} subtitle='Moonrise' img={moon} />
                        <Astronomy time={props.moonsetTime} subtitle='Moonset' img={moonset} />
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default WeatherSearch;