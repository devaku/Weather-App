import magnifyingGlass from '../assets/magnifying_glass.svg';
import { FetchWeather } from '../js/weather_api';

function SearchBar() {
	function handleSubmit(e) {
		console.log(e);
		e.stopPropagation();
	}

	function handleKeyDown(e) {
		if (e.key == 'Enter') {
			console.log('Enter');
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
						placeholder="Enter City Name"
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
