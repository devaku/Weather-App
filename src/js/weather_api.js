const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const baseUrl = 'http://api.openweathermap.org';
import * as lookup from 'country-code-lookup';

export async function FetchWeather(cityName, country, units) {
	try {
		let countryCode = lookup.byCountry(country);
		countryCode = countryCode.internet;
		const url = `${baseUrl}/data/2.5/weather?q=${cityName},${countryCode}&units=${units}&appid=${apiKey}`;
		let response = await fetch(url).then((res) => res.json());

		let weatherArray = PrepareWeatherJson(response);
		weatherArray = weatherArray.map((el) => {
			return {
				...el,
				unit: units,
			};
		});
		let finalResponse = {
			weatherArray,
			isValid: true,
		};
		return finalResponse;
	} catch (e) {
		console.log(e);
		return e;
	}
}

export async function FetchFiveDayForecast(cityName, country, units) {
	try {
		let countryCode = lookup.byCountry(country);
		countryCode = countryCode.internet;

		// Find the lat and lon of the given city
		const url = `${baseUrl}/data/2.5/forecast?q=${cityName},${countryCode}&units=${units}&appid=${apiKey}&limit=5`;
		let response = await fetch(url).then((res) => res.json());
		let weatherArray = PrepareForecastJson(response);
		weatherArray = weatherArray.map((el) => {
			return {
				...el,
				unit: units,
			};
		});
		let finalResponse = {
			weatherArray,
			isValid: true,
		};
		return finalResponse;
	} catch (e) {
		console.log(e);
		return e;
	}
}

function PrepareWeatherJson(jsonResponse) {
	let finalJson = PrepareJson(jsonResponse);

	finalJson.cityName = jsonResponse.name;

	// Convert back to full word
	let fullCountry = lookup.byInternet(jsonResponse.sys.country);
	finalJson.country = fullCountry.country;

	// Convert time
	let timezone = jsonResponse.timezone;
	let sunrise = new Date((jsonResponse.sys.sunrise + timezone) * 1000);
	let sunset = new Date((jsonResponse.sys.sunset + timezone) * 1000);

	finalJson.sunrise = ConvertToReadableTime(sunrise);
	finalJson.sunset = ConvertToReadableTime(sunset);

	return [finalJson];
}

function PrepareForecastJson(jsonResponse) {
	let weatherArray = [];
	for (let x = 0; x < jsonResponse.list.length; x++) {
		const currentWeather = jsonResponse.list[x];

		let finalJson = PrepareJson(currentWeather);

		finalJson.cityName = jsonResponse.city.name;

		// Convert back to full word
		let fullCountry = lookup.byInternet(jsonResponse.city.country);
		finalJson.country = fullCountry.country;

		// Convert time
		let timezone = jsonResponse.city.timezone;
		let sunrise = new Date((jsonResponse.city.sunrise + timezone) * 1000);
		let sunset = new Date((jsonResponse.city.sunset + timezone) * 1000);

		finalJson.sunrise = ConvertToReadableTime(sunrise);
		finalJson.sunset = ConvertToReadableTime(sunset);

		/**
     *  Weather icon
        Date
        Temperature (switchable to Metric (c)/Imperial(f))
        Feels Like (switchable to Metric (c)/Imperial(f))
        Lowest Temperature (switchable to Metric (c)/Imperial(f))
        Highest Temperature (switchable to Metric (c)/Imperial(f))

        Weather Description (Rain, Snow, Sunny)
        Humidity (in percentage)
        Wind Speed (switchable to Metric (c)/Imperial(f))

        City Name,
        City Country
        City Timezone (UTC)
        city Sunrise (UTC)
        City Sunset (UTC)

     */

		weatherArray.push(finalJson);
	}
	return weatherArray;
}

function PrepareJson(jsonResponse) {
	const finalJson = {};

	finalJson.weatherIcon = jsonResponse.weather[0].icon;
	let date = new Date(jsonResponse.dt * 1000);
	finalJson.currentDate = date;

	// Should be convertible.
	finalJson.temperature = jsonResponse.main.temp;
	finalJson.feelsLike = jsonResponse.main.feels_like;
	finalJson.temperatureMin = jsonResponse.main.temp_min;
	finalJson.temperatureMax = jsonResponse.main.temp_max;
	finalJson.windSpeed = jsonResponse.wind.speed;

	finalJson.weatherDescription = jsonResponse.weather[0].description;

	// In percentage
	finalJson.humidity = jsonResponse.main.humidity;

	/**
     *  Weather icon
        Date
        Temperature (switchable to Metric (c)/Imperial(f))
        Feels Like (switchable to Metric (c)/Imperial(f))
        Lowest Temperature (switchable to Metric (c)/Imperial(f))
        Highest Temperature (switchable to Metric (c)/Imperial(f))

        Weather Description (Rain, Snow, Sunny)
        Humidity (in percentage)
        Wind Speed (switchable to Metric (c)/Imperial(f))

        City Name,
        City Country
        City Timezone (UTC)
        city Sunrise (UTC)
        City Sunset (UTC)

     */

	return finalJson;
}

function ConvertToReadableDate(timestamp) {
	const daysOfTheWeek = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	];

	const monthsOfTheYear = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	let day = int(timestamp.getUTCDay());
	let month = int(timestamp.getUTCMonth());
	let date = timestamp.getUTCDate();
	let year = timestamp.getUTCFullYear();

	let finalTime = `${daysOfTheWeek[day]}, ${monthsOfTheYear[month]}, ${date}, ${year}`;

	return finalTime;
}

function ConvertToReadableTime(timestamp) {
	let hours = timestamp.getUTCHours().toString();
	let minutes = timestamp.getUTCMinutes().toString();
	let seconds = timestamp.getUTCSeconds().toString();

	let finalTime = `${hours.padStart(2, '0')}:${minutes.padStart(
		2,
		'0'
	)}:${seconds.padStart(2, '0')}`;

	return finalTime;
}
