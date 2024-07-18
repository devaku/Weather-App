// import magnifyingGlass from '../assets/magnifying_glass.svg';
import SvgMagnifyingGlass from './svgs/SvgMagnifyingGlass';
import SvgBurger from './svgs/SvgBurger';
import { fetchWeather } from '../js/weather_api';

function SearchBar({ setJsonResponse, setDisplaySidebar }) {
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
			let jsonResponse = await fetchWeather('Manila');
			setJsonResponse(jsonResponse);
		}
	}

	function handleClick(e) {
		e.stopPropagation();
		setDisplaySidebar(true);
	}
	return (
		<>
			<div className="flex items-center sm:w-full md:mx-auto md:w-4/12">
				{/* Burger */}
				<div onClick={handleClick}>
					<div className="w-[50px]">
						<SvgBurger twColor="fill-white"></SvgBurger>
					</div>
					{/* <img
						className="w-[50px]"
						src={svgBurger({ twColor: 'fill-white' })}
						alt="Burger Menu"
					/> */}
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

						{/* <img
							className="w-[50px] invert"
							src={magnifyingGlass}
							alt="Search"
							onClick={handleSubmit}
						/> */}
					</div>
				</div>
			</div>
		</>
	);
}

export default SearchBar;
