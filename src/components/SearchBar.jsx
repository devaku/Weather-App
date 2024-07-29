import SvgMagnifyingGlass from './svgs/SvgMagnifyingGlass';
import SvgBurger from './svgs/SvgBurger';
import { FetchWeather, FetchFiveDayForecast } from '../js/weather_api';
import { useState } from 'react';

function SearchBar({
	setJsonResponse,
	setIsCityCardActive,
	setIsWeatherCardActive,
	setDisplaySidebar,
	searchSetting,
}) {
	let [displayError, setDisplayError] = useState(false);
	let [errorMessage, setErrorMessage] = useState('');
	function displayPage() {
		return new Promise((resolve) => {
			setTimeout(() => {
				setIsCityCardActive(true);
				setIsWeatherCardActive(true);
				resolve();
			}, 1000);
		});
	}

	async function handleSubmit(e) {
		e.stopPropagation();
		setIsCityCardActive(false);
		setIsWeatherCardActive(false);

		if (!e.target.value) {
			alert('Blank is not allowed.');
			return;
		}
		let [cityName, country = ''] = e.target.value.split(',');

		let jsonResponse = await fetchData(cityName, country, searchSetting);
		if (!jsonResponse.isValid) {
			errorMessage = JSON.stringify(jsonResponse);
			setErrorMessage(errorMessage);
			setJsonResponse({
				weatherArray: [{}],
			});
			setDisplayError(true);
		} else {
			await displayPage();
			setJsonResponse(jsonResponse);
		}
	}

	async function handleKeyDown(e) {
		e.stopPropagation();
		if (e.key == 'Enter') {
			setIsCityCardActive(false);
			setIsWeatherCardActive(false);
			if (!e.target.value) {
				alert('Blank is not allowed.');
				return;
			}
			let [cityName, country = ''] = e.target.value.split(',');

			cityName = cityName.trim();
			country = country.trim();

			let jsonResponse = await fetchData(
				cityName,
				country,
				searchSetting
			);
			if (!jsonResponse.isValid) {
				errorMessage = JSON.stringify(jsonResponse);
				setErrorMessage(errorMessage);
				setJsonResponse({
					weatherArray: [{}],
				});
				setDisplayError(true);
			} else {
				await displayPage();
				setJsonResponse(jsonResponse);
			}
		}
	}

	async function fetchData(cityName, country, searchSetting) {
		let jsonResponse;
		if (searchSetting.weatherSetting == 'forecast') {
			jsonResponse = await FetchFiveDayForecast(
				cityName,
				country,
				searchSetting.units
			);
		} else {
			jsonResponse = await FetchWeather(
				cityName.trim(),
				country.trim(),
				searchSetting.units
			);
		}

		return jsonResponse;
	}

	function handleClick(e) {
		e.stopPropagation();
		setDisplaySidebar(true);
	}

	function handleClearError(e) {
		e.stopPropagation();
		setDisplayError(false);
	}
	return (
		<div className="relative ">
			<div className="flex items-center sm:w-full md:mx-auto md:w-4/12">
				{/* Burger */}
				<div onClick={handleClick}>
					<div className="w-[50px]">
						<SvgBurger twColor="fill-white"></SvgBurger>
					</div>
				</div>
				<div className="m-2.5 w-full bg-white flex rounded-md">
					{/* Textbox */}
					<div className="ml-2.5 my-[15px] w-full grow">
						<input
							className="w-full h-full"
							type="text"
							placeholder="Enter City Name, and Country"
							name=""
							maxLength={100}
							onKeyDown={handleKeyDown}
							id=""
						/>
					</div>

					{/* Image */}
					<div className="ml-1 flex items-center bg-secondary rounded-r-md">
						<div className="w-[50px]" onClick={handleSubmit}>
							<SvgMagnifyingGlass twColor="fill-white"></SvgMagnifyingGlass>
						</div>
					</div>
				</div>
			</div>
			<div
				className={
					'absolute w-full rounded-md bg-coa text-white ' +
					(displayError ? '' : 'hidden')
				}>
				<div className="flex flex-col items-center justify-center p-2 text-black overflow-hidden">
					<div>Error!</div>
					<div>{errorMessage}</div>
					<div className="my-2">
						<button
							onClick={handleClearError}
							className="bg-yellow-300 px-5 rounded-md hover:bg-yellow-600">
							Clear
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SearchBar;
