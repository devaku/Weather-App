import { useState } from 'react';
import WeatherCard from './components/weather_card';
import SearchBar from './components/search_bar';
import CityName from './components/city_name';

function App() {
	return (
		<>
			<main class="m-[5px]">
				<SearchBar></SearchBar>
				<CityName></CityName>
				<WeatherCard></WeatherCard>
			</main>
		</>
	);
}

export default App;
