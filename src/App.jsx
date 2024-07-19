import { useState } from 'react';
import WeatherCard from './components/WeatherCard';
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
					setDisplaySidebar={setDisplaySidebar}></SearchBar>
				<CityName jsonResponse={jsonResponse}></CityName>
				<div className="overflow-scroll md:overflow-hidden flex flex-col lg:flex-row justify-evenly gap-4">
					<WeatherCard jsonResponse={jsonResponse}></WeatherCard>
					{/* <WeatherCard></WeatherCard>
					<WeatherCard></WeatherCard>
					<WeatherCard></WeatherCard>
					<WeatherCard></WeatherCard> */}
				</div>
			</main>
		</>
	);
}

export default App;
