import s from './WeatherAPP.module.css';
import tempMax from './../../assets/img/icons/tempMax.png';
import tempMin from './../../assets/img/icons/tempMin.png';
import wind from './../../assets/img/icons/wind.png';
import sky from './../../assets/img/icons/sky.png';
import water from './../../assets/img/icons/water.png';
import sunny from './../../assets/img/icons/sunny.png';
import search from './../../assets/img/icons/search.svg';
import moon from './../../assets/img/icons/moon.png';
import Details from './Details';
import Forecast from './Forecast';
import { Field, Form, Formik } from 'formik';


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