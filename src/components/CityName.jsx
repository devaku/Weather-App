function CityName(props) {
	const { isCityCardActive, jsonResponse } = props;
	let cityName, country;
	if (jsonResponse) {
		cityName = jsonResponse.weatherArray[0].cityName
			? jsonResponse.weatherArray[0].cityName
			: '';
		country = jsonResponse.weatherArray[0].country;
	}

	return (
		<>
			<div className="mb-2.5 w-full flex justify-center">
				<div
					className={
						'text-center w-max text-white text-2xl md:text-4xl md:mt-3 city-card ' +
						(isCityCardActive ? 'city-card-active' : '')
					}>
					<div>
						{cityName}, {country}
					</div>
					<div className="h-4 md:h-min text-white text-center">
						<p className="text-xs md:text-lg">
							Monday, Day, September, YEAR
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default CityName;
