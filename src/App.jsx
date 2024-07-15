import { useState } from 'react';
import WeatherCard from './components/weather_card';
import SearchBar from './components/search_bar';
import CityName from './components/city_name';

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
