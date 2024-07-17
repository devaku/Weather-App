const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const baseUrl = 'http://api.openweathermap.org';
import * as lookup from 'country-code-lookup';

export async function fetchWeather(cityName, country) {
	try {
		const countryCode = lookup.byCountry(country);
		const url = `${baseUrl}/data/2.5/weather?q=${cityName},${countryCode}&appid=${apiKey}`;
		let response = await fetch(url).then((res) => res.json());
		response.isValid = true;
		return response;
	} catch (e) {
		console.log(e);
		return e;
	}
}

export async function fiveDayForecast(cityName, country) {
	try {
		const countryCode = lookup.byCountry(country);
		// Find the lat and lon of the given city
		const url = `${baseUrl}/data/2.5/forecast?q=${cityName},${countryCode}&appid=${apiKey}`;
		let response = await fetch(url).then((res) => res.json());
		response.isValid = true;
		return response;
	} catch (e) {
		console.log(e);
		return e;
	}
}
