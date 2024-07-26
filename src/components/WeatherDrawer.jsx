// Components
import WeatherCard from './WeatherCard';

function WeatherDrawer({ jsonResponse, isWeatherCardActive }) {
	let item = 0;
	let { weatherMap } = jsonResponse;

	let drawers = [];

	if (weatherMap) {
		let iterator = weatherMap.entries();
		for (let entry of iterator) {
			drawers.push(entry[1]);
		}
	}
	let css = '';
	let borderCss = '';
	if (drawers.length > 1) {
		css = 'lg:grid lg:grid-cols-4 ';
		borderCss = 'border-2 rounded-md';
	} else {
		css = 'lg:flex-row ';
		borderCss = '';
	}
	return (
		<div
			className={
				'lg:mx-24 overflow-scroll md:overflow-hidden ' +
				'weather-card ' +
				(isWeatherCardActive ? 'weather-card-active' : '')
			}>
			{/* Drawers */}
			{drawers.map((cards) => {
				let drawerKey = `drawer-${item++}`;
				return (
					<div className={'my-2 ' + borderCss} key={drawerKey}>
						<div className="text-white">
							<p className="text-center text-lg md:text-lg">
								{cards[0].readableDate}
							</p>
						</div>
						<div
							className={
								' flex flex-col justify-evenly gap-4 lg:pb-2 ' +
								css
							}>
							{cards.map((el) => {
								return (
									<WeatherCard
										key={
											`${drawerKey}-weathercard-` + item++
										}
										jsonResponse={el}></WeatherCard>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
}
export default WeatherDrawer;
