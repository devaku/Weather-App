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
							srcset=""
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
					{/* CARDS */}
					<div className="flex gap-3">
						{/* Humidity */}
						<div className="inline-block h-10">
							{/* Image */}
							<div className="w-full flex justify-center">
								<img
									className="invert"
									src={humidityImage}
									alt="Humidity"
									srcset=""
								/>
							</div>

							{/* Text */}
							<div className="text-xs text-white">
								<p>Humidity</p>
							</div>
						</div>
						{/* Wind */}
						<div className="inline-block h-10">
							{/* Image */}
							<div className="w-full flex justify-center">
								<img
									className="invert"
									src={windSpeedImage}
									alt="Humidity"
									srcset=""
								/>
							</div>

							{/* Text */}
							<div className="text-xs text-white">
								<p>Wind Speed</p>
							</div>
						</div>
					</div>
					{/* Text */}
					<div>
						<p className="text-sm text-center text-white">
							Thunderstom with Heavy Drizzle
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
export default WeatherCard;
