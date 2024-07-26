// Components
import WeatherCard from './WeatherCard';

function WeatherDrawer({ jsonResponse, isWeatherCardActive }) {
	let item = 0;
	let { weatherMap } = jsonResponse;

	let drawers = [];
	let css = '';
	if (weatherMap) {
		let iterator = weatherMap.entries();
		for (let entry of iterator) {
			drawers.push(entry[1]);
		}
	}
	if (drawers.length > 1) {
		css = 'lg:grid lg:grid-cols-4 ';
	} else {
		css = 'lg:flex-row ';
	}
	return (
		<>
			{/* Closet */}
			<div className="lg:mx-24 overflow-scroll md:overflow-hidden">
				{/* Drawers */}
				{drawers.map((cards) => {
					return (
						<div
							key={item++}
							className={
								' flex flex-col justify-evenly gap-4 ' +
								css +
								'weather-card ' +
								(isWeatherCardActive
									? 'weather-card-active'
									: '')
							}>
							<div className="h-4 md:h-min text-white text-center">
								<p className="text-xs md:text-lg">
									{cards[0].readableDate}
								</p>
							</div>
							{cards.map((el) => {
								return (
									<WeatherCard
										key={item++}
										jsonResponse={el}></WeatherCard>
								);
							})}
						</div>
					);
				})}
			</div>
		</>
	);
}
export default WeatherDrawer;
