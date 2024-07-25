// Components
import WeatherIcon from './WeatherIcon';

// Images
import placeHolderImage from '../assets/icon.png';
import svgHumidity from './svgs/SvgHumidity';
import svgWind from './svgs/SvgWind';

function WeatherCard({ jsonResponse, isWeatherCardActive }) {
	return (
		<>
			<div
				className={
					'md:h-min md:flex md:flex-col weather-card ' +
					(isWeatherCardActive ? 'weather-card-active' : '')
				}>
				{/* Top Row */}
				<div className="w-full flex h-[100px] md:h-min md:flex-col items-center justify-evenly">
					{/* Image */}
					<div className="bg-coa h-full md:h-[100px] rounded-full my-5">
						<img
							className="w-full h-full object-contain"
							src={placeHolderImage}
							alt="PlaceHolder"
						/>
					</div>
					{/* Hero Weather */}
					<div className="text-white h-full flex flex-col md:items-center">
						{/* TIME */}
						<div className="h-4 md:h-min">
							<p className="text-xs md:text-lg">00:00</p>
						</div>
						{/* Temperatures */}
						<div className="flex-grow flex items-center md:gap-7">
							{/* Hero Temp */}
							<div>
								<div className="w-[90px] h-10 text-2xl text-center">
									<span>20</span>°<span>C</span>
								</div>
								<div className="text-xs">
									<p>
										Feels Like: <span>20</span>°
										<span>C</span>
									</p>
								</div>
							</div>
							{/* Highs/Lows */}
							<div className="text-xs flex-grow">
								<div className="text-2xl">Sunny</div>
								<div className="">
									Highs: <span>20</span>°<span>C</span>
								</div>
								<div className="">
									Lows: <span>20</span>°<span>C</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Bottom Row */}
				<div className="w-full flex md:flex-col-reverse h-12 md:h-min items-center justify-evenly md:gap-3">
					{/* Icons */}
					<div className="flex gap-3">
						<WeatherIcon
							svg={svgHumidity({ twColor: 'fill-white' })}
							text="100%"></WeatherIcon>

						<WeatherIcon
							svg={svgWind({ twColor: 'fill-white' })}
							text="100km/h"></WeatherIcon>
					</div>
					{/* Text */}
					<div>
						<p className="text-sm md:text-base text-center text-white md:mt-3">
							Thunderstorm with Heavy Drizzle
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
export default WeatherCard;
