import loader from '../assets/img/icons/loader.gif';
import s from './Loader.module.css';

const Loader = () => {
    return (
        <div className={s.border_loader}>
            <img className={s.loader} src={loader} />
        </div>
    );
}

export default Loader;