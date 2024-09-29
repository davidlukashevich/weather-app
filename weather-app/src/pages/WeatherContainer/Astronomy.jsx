import s from './WeatherAPP.module.css';

const Astronomy = ({ subtitle, img, time }) => {
    return (
        <div className={s.forecast_info}>
            <div className={s.forecast_title}>
                <img className={s.forecast_img} src={img} />
                <div className={s.forecast_subtitle}>{subtitle}</div>
            </div>
            <div className={s.forecast_time}>{time}</div>
        </div>
    );
}

export default Astronomy;