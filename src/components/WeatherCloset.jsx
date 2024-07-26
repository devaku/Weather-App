// Components
import WeatherCard from './WeatherCard';
import WeatherDrawer from './WeatherDrawer';

function WeatherCloset({ jsonResponse, isWeatherCardActive }) {
	let item = 0;
	let { weatherArray } = jsonResponse;
	return (
		<>
			<div className="lg:mx-24">
				<div
					className={
						'overflow-scroll md:overflow-hidden flex flex-col justify-evenly gap-4'
					}>
					<div className="h-4 md:h-min text-white text-center">
						<p className="text-xs md:text-lg">
							Monday, Day, September, YEAR
						</p>
					</div>
					{weatherArray.map((el) => {
						return (
							<WeatherCard
								key={item++}
								jsonResponse={el}></WeatherCard>
						);
					})}
				</div>
			</div>
		</>
	);
}
export default WeatherCloset;
