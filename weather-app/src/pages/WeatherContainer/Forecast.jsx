import s from './WeatherAPP.module.css';

const Forecast = ({ time, subtitle, img, data }) => {
    return (
        <div className={s.forecast_info}>
            <div className={s.forecast_title}>
                <img className={s.forecast_img} src={img} />
                <div className={s.forecast_additional}>
                    <div className={s.forecast_time}>{time}</div>
                    <div className={s.forecast_subtitle}>{subtitle}</div>
                </div>
            </div>
            <div className={s.forecast_data}>{data}</div>
        </div>
    );
}

export default Forecast;