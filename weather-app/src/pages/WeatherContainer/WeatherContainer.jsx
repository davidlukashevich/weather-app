import WeatherPage from "./WeatherPage";

const WeatherContainer = (props) => {
    return (
        <div><WeatherPage {...props} /></div>
    );
}

export default WeatherContainer;