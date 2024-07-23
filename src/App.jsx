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
	let [jsonResponse, setJsonResponse] = useState(null);
	let [displaySidebar, setDisplaySidebar] = useState(false);
	let [displayCityDetails, setDisplayCityDetails] = useState(false);

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
					setDisplaySidebar={setDisplaySidebar}
					searchSetting={searchSetting}></SearchBar>
				<CityName
					jsonResponse={jsonResponse}
					displayCityDetails={displayCityDetails}
					setDisplayCityDetails={setDisplayCityDetails}></CityName>
				<WeatherDrawer jsonResponse={jsonResponse}></WeatherDrawer>
			</main>
		</>
	);
}

export default App;
