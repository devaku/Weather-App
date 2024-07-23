// Components
import WeatherCard from './WeatherCard';

function WeatherDrawer({ jsonResponse }) {
	let item = 0;

	if (jsonResponse) {
		let { weatherArray } = jsonResponse;
		weatherArray = weatherArray ? weatherArray : [];

		let weatherCards = () => {
			return weatherArray.map((el) => {
				return (
					<WeatherCard key={item++} jsonResponse={el}></WeatherCard>
				);
			});
		};

		let css = '';
		if (weatherArray.length > 1) {
			css = 'lg:grid lg:grid-cols-4';
		} else {
			css = 'lg:flex-row';
		}
		return (
			<>
				<div className="lg:mx-24">
					<div
						className={
							'overflow-scroll md:overflow-hidden flex flex-col justify-evenly gap-4 ' +
							css
						}>
						{weatherCards()}
					</div>
				</div>
			</>
		);
	} else {
		return <></>;
	}
}
export default WeatherDrawer;
