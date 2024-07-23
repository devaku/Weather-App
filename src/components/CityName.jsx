function CityName(props) {
	if (!props.jsonResponse) {
		return <></>;
	}

	const { setDisplayCityDetails, displayCityDetails } = props;
	const { cityName, country } = props.jsonResponse;

	setTimeout(() => {
		setDisplayCityDetails(true);
	}, 200);

	return (
		<>
			<div className="mb-2.5 w-full flex justify-center">
				<div
					className={
						'text-center w-max text-white text-2xl md:text-4xl md:mt-3 transition-fade-in ' +
						(displayCityDetails
							? 'transition-fade-in-from-left-end '
							: 'transition-fade-in-from-left-start ')
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
