function CityName(props) {
	const { isCityCardActive, jsonResponse } = props;
	let cityName, country;
	if (jsonResponse) {
		cityName = jsonResponse.extractedCity ? jsonResponse.extractedCity : '';
		country = jsonResponse.extractedCountry;
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
				</div>
			</div>
		</>
	);
}

export default CityName;
