import s from './WeatherAPP.module.css';
import sky from './../../assets/img/icons/sky.png';

const WeatherInformation = (props) => {
    return (
        <div className={s.information}>
            <div className={s.temperature}>{props.tempAverage}°</div>
            <div className={s.city}>
                <div className={s.city_name}>{props.city}</div>
                <div className={s.about_city}>{props.localTime}</div>
            </div>
            <div className={s.icon}><img className={s.icon_img} src={sky} /></div>
        </div>
    );
}

export default WeatherInformation;