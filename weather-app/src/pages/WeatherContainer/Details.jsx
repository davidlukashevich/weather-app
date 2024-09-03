import s from './WeatherAPP.module.css';
import cn from 'classnames'

const Details = ({ title, data, img, classNames }) => {
    return (
        <div className={s.details_info}>
            <div className={s.details_title}>{title}</div>
            <div className={s.details_about}>
                <div className={s.details_data}>{data}</div>
                <div className={s.border_img}><img className={cn(s.details_img, classNames)} src={img} /></div>
            </div>
        </div>
    );
}

export default Details;