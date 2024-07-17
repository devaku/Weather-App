import magnifyingGlass from '../assets/magnifying_glass.svg';
import { fetchWeather } from '../js/weather_api';

function SearchBar({ setJsonResponse }) {
	async function handleSubmit(e) {
		e.stopPropagation();

		// TODO add handling if null is the response
		let jsonResponse = await fetchWeather('Manila');
		setJsonResponse(jsonResponse);
	}

	async function handleKeyDown(e) {
		e.stopPropagation();

		if (e.key == 'Enter') {
			// TODO add handling if null is the response
			let jsonResponse = fetchWeather('Manila');
			setJsonResponse(jsonResponse);
		}
	}
	return (
		<>
			{/* Textbox */}
			<div className="m-2.5 sm:w-full md:mx-auto md:w-4/12 bg-white flex rounded-md">
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
					<img
						className="w-[50px] invert"
						src={magnifyingGlass}
						alt="Search"
						onClick={handleSubmit}
					/>
				</div>
			</div>
		</>
	);
}

export default SearchBar;
