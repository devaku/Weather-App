import { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import CityName from './components/CityName';

function App() {
	return (
		<>
			<main className="m-[5px]">
				<SearchBar></SearchBar>
				<CityName></CityName>
				<div className="overflow-scroll md:overflow-hidden flex flex-col lg:flex-row justify-evenly gap-4">
					<WeatherCard></WeatherCard>
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
