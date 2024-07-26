// Components
import WeatherIcon from './WeatherIcon';

// Images
import svgHumidity from './svgs/SvgHumidity';
import svgWind from './svgs/SvgWind';

function WeatherCard({ jsonResponse }) {
	let weatherIconBaseUrl = '';
	if (jsonResponse.weatherIcon) {
		weatherIconBaseUrl = `https://openweathermap.org/img/wn/${jsonResponse.weatherIcon}@4x.png`;
	}

	let temperatureUnit = 'C';
	let windSpeedUnit = 'meters/second';
	if (jsonResponse.unit == 'metric') {
		windSpeedUnit = 'meters/second';
		temperatureUnit = 'C';
	} else {
		windSpeedUnit = 'miles/hour';
		temperatureUnit = 'F';
	}
	return (
		<>
			<div className={'md:h-min md:flex md:flex-col'}>
				{/* Top Row */}
				<div className="w-full flex h-[100px] md:h-min md:flex-col items-center justify-evenly">
					{/* Image */}
					<div className="bg-coa h-full md:h-[100px] rounded-full my-5">
						<img
							className="w-full h-full object-contain"
							src={weatherIconBaseUrl}
							alt="PlaceHolder"
						/>
					</div>
					{/* Hero Weather */}
					<div className="text-white h-full flex flex-col md:items-center">
						{/* TIME */}
						<div className="">
							<p className="text-lg text-center">
								{jsonResponse.currentTime}
							</p>
						</div>
						{/* Temperatures */}
						<div className="flex-grow flex items-center md:gap-7">
							{/* Hero Temp */}
							<div className="mr-2">
								<div className="w-[90px] h-10 text-2xl text-center">
									<span>{jsonResponse.temperature}</span>°
									<span>{temperatureUnit}</span>
								</div>
								<div className="text-xs">
									<p>
										Feels Like:{' '}
										<span>{jsonResponse.feelsLike}</span>°
										<span>{temperatureUnit}</span>
									</p>
								</div>
							</div>
							{/* Highs/Lows */}
							<div className="text-xs flex-grow">
								<div className="text-2xl">Sunny</div>
								<div className="">
									Highs:{' '}
									<span>{jsonResponse.temperatureMax}</span>°
									<span>{temperatureUnit}</span>
								</div>
								<div className="">
									Lows:{' '}
									<span>{jsonResponse.temperatureMin}</span>°
									<span>{temperatureUnit}</span>
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
							text={jsonResponse.humidity + '%'}></WeatherIcon>

						<WeatherIcon
							svg={svgWind({ twColor: 'fill-white' })}
							text={
								jsonResponse.windSpeed + ' ' + windSpeedUnit
							}></WeatherIcon>
					</div>
					{/* Text */}
					<div>
						<p className="text-sm md:text-base text-center text-white md:mt-3">
							{jsonResponse.weatherDescription}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
export default WeatherCard;
