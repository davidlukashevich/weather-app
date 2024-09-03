import s from './WeatherAPP.module.css';
import sunny from '../../assets/img/sunny.png';
import sky from './../../assets/img/sky.png';

const WeatherInformation = (props) => {
    return (
        <div className={s.information}>
            <div className={s.temperature}>24°</div>
            <div className={s.city}>
                <div className={s.city_name}>Warsaw</div>
                <div className={s.about_city}>13:13 - Mon, 12 Aug 2024</div>
            </div>
            <div className={s.icon}><img className={s.icon_img} src={sky} /></div>
        </div>
    );
}

export default WeatherInformation;