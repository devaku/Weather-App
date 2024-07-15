// Components
import WeatherIcon from './weather_icon';

// Images
import placeHolderImage from '../assets/10d@4x.png';
import humidityImage from '../assets/humidity.svg';
import windSpeedImage from '../assets/wind.svg';

function WeatherCard() {
	return (
		<>
			<div>
				{/* Top Row */}
				<div className="w-full flex h-[100px] items-center justify-evenly">
					{/* Image */}
					<div className="bg-coa h-full rounded-full my-5">
						<img
							className="w-full h-full object-contain"
							src={placeHolderImage}
							alt="PlaceHolder"
						/>
					</div>
					{/* Hero Weather */}
					<div className="text-white h-full flex flex-col">
						{/* Date */}
						<div className="h-4">
							<p className="text-xs">
								Monday, September, DAY, YEAR
							</p>
						</div>
						{/* Temperatures */}
						<div className="flex-grow flex items-center">
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
				<div className="w-full flex h-12 items-center justify-evenly">
					{/* Icons */}
					<div className="flex gap-3">
						<WeatherIcon
							alt="Humidity"
							image={humidityImage}
							text="Humidity"></WeatherIcon>

						<WeatherIcon
							alt="Wind Speed"
							image={windSpeedImage}
							text="Wind Speed"></WeatherIcon>
					</div>
					{/* Text */}
					<div>
						<p className="text-sm text-center text-white">
							Thunderstorm with Heavy Drizzle
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
export default WeatherCard;
