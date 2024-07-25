import { useState } from 'react';
import WeatherDrawer from './components/WeatherDrawer';
import SearchBar from './components/SearchBar';
import CityName from './components/CityName';
import Sidebar from './components/Sidebar';

function App() {
	let [searchSetting, setSearchSetting] = useState({
		weatherSetting: 'current',
		units: 'metric',
	});

	let [jsonResponse, setJsonResponse] = useState({
		weatherArray: [{}],
	});
	let [displaySidebar, setDisplaySidebar] = useState(false);

	// UI Flags
	let [isCityCardActive, setIsCityCardActive] = useState(false);
	let [isWeatherCardActive, setIsWeatherCardActive] = useState(false);

	return (
		<>
			<Sidebar
				displaySidebar={displaySidebar}
				setDisplaySidebar={setDisplaySidebar}
				searchSetting={searchSetting}
				setSearchSetting={setSearchSetting}></Sidebar>
			<main className="m-[5px]">
				<SearchBar
					setJsonResponse={setJsonResponse}
					jsonResponse={jsonResponse}
					setDisplaySidebar={setDisplaySidebar}
					setIsCityCardActive={setIsCityCardActive}
					setIsWeatherCardActive={setIsWeatherCardActive}
					searchSetting={searchSetting}></SearchBar>
				<CityName
					jsonResponse={jsonResponse}
					isCityCardActive={isCityCardActive}></CityName>
				<WeatherDrawer
					jsonResponse={jsonResponse}
					isWeatherCardActive={isWeatherCardActive}></WeatherDrawer>
			</main>
		</>
	);
}

export default App;
