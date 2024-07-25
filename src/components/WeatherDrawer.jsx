// Components
import WeatherCard from './WeatherCard';

function WeatherDrawer({ jsonResponse, isWeatherCardActive }) {
	let item = 0;
	let { weatherArray } = jsonResponse;
	let weatherCards = () => {
		return weatherArray.map((el) => {
			return <WeatherCard key={item++} jsonResponse={el}></WeatherCard>;
		});
	};

	let css = '';
	if (weatherArray.length > 1) {
		css = 'lg:grid lg:grid-cols-4 ';
	} else {
		css = 'lg:flex-row ';
	}
	return (
		<>
			<div className="lg:mx-24">
				<div
					className={
						'overflow-scroll md:overflow-hidden flex flex-col justify-evenly gap-4 ' +
						css +
						' weather-card ' +
						(isWeatherCardActive ? 'weather-card-active' : '')
					}>
					{weatherCards()}
				</div>
			</div>
		</>
	);
}
export default WeatherDrawer;
