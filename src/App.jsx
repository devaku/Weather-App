import { useState } from 'react';
import WeatherCard from './components/weather_card';
import SearchBar from './components/search_bar';

function App() {
	return (
		<>
			<main class="m-[5px]">
				<SearchBar></SearchBar>
				<WeatherCard></WeatherCard>
			</main>
		</>
	);
}

export default App;
