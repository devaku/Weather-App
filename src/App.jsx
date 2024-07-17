import { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import CityName from './components/CityName';
import SearchSetting from './components/SearchSetting';

function App() {
	let [searchSetting, setSearchSetting] = useState('current');
	let [jsonResponse, setJsonResponse] = useState('');

	return (
		<>
			<main className="m-[5px]">
				<SearchSetting
					setSearchSetting={setSearchSetting}></SearchSetting>
				<SearchBar setJsonResponse={setJsonResponse}></SearchBar>
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
