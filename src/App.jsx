import { useState } from 'react';
import WeatherDrawer from './components/WeatherDrawer';
import SearchBar from './components/SearchBar';
import CityName from './components/CityName';
import Sidebar from './components/Sidebar';

function App() {
	let [searchSetting, setSearchSetting] = useState({
		// current of forecast
		weatherSetting: 'current',

		// metric or imperial
		units: 'metric',
	});

	let [jsonResponse, setJsonResponse] = useState({
		weatherArray: [{}],
	});

	// let [jsonResponse, setJsonResponse] = useState({
	// 	weatherArray: [
	// 		{
	// 			weatherIcon: '10n',
	// 			currentDate:
	// 				'Thu Jul 25 2024 09:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 28.08,
	// 			feelsLike: 33.12,
	// 			temperatureMin: 28.08,
	// 			temperatureMax: 28.11,
	// 			windSpeed: 7.24,
	// 			weatherDescription: 'light rain',
	// 			humidity: 85,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '10n',
	// 			currentDate:
	// 				'Thu Jul 25 2024 12:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 27.89,
	// 			feelsLike: 32.28,
	// 			temperatureMin: 27.5,
	// 			temperatureMax: 27.89,
	// 			windSpeed: 4.95,
	// 			weatherDescription: 'light rain',
	// 			humidity: 83,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '10n',
	// 			currentDate:
	// 				'Thu Jul 25 2024 15:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 27.46,
	// 			feelsLike: 31.16,
	// 			temperatureMin: 27.15,
	// 			temperatureMax: 27.46,
	// 			windSpeed: 4.45,
	// 			weatherDescription: 'light rain',
	// 			humidity: 83,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '10d',
	// 			currentDate:
	// 				'Thu Jul 25 2024 18:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 28.54,
	// 			feelsLike: 32.76,
	// 			temperatureMin: 28.54,
	// 			temperatureMax: 28.54,
	// 			windSpeed: 5.59,
	// 			weatherDescription: 'light rain',
	// 			humidity: 76,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '10d',
	// 			currentDate:
	// 				'Thu Jul 25 2024 21:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 31,
	// 			feelsLike: 35.35,
	// 			temperatureMin: 31,
	// 			temperatureMax: 31,
	// 			windSpeed: 7.33,
	// 			weatherDescription: 'light rain',
	// 			humidity: 62,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '10d',
	// 			currentDate:
	// 				'Fri Jul 26 2024 00:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 31.04,
	// 			feelsLike: 35.44,
	// 			temperatureMin: 31.04,
	// 			temperatureMax: 31.04,
	// 			windSpeed: 8.45,
	// 			weatherDescription: 'light rain',
	// 			humidity: 62,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '04d',
	// 			currentDate:
	// 				'Fri Jul 26 2024 03:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 30.03,
	// 			feelsLike: 34.4,
	// 			temperatureMin: 30.03,
	// 			temperatureMax: 30.03,
	// 			windSpeed: 7.49,
	// 			weatherDescription: 'overcast clouds',
	// 			humidity: 67,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '10n',
	// 			currentDate:
	// 				'Fri Jul 26 2024 06:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 28.99,
	// 			feelsLike: 32.71,
	// 			temperatureMin: 28.99,
	// 			temperatureMax: 28.99,
	// 			windSpeed: 4.62,
	// 			weatherDescription: 'light rain',
	// 			humidity: 70,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '04n',
	// 			currentDate:
	// 				'Fri Jul 26 2024 09:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 28.49,
	// 			feelsLike: 31.8,
	// 			temperatureMin: 28.49,
	// 			temperatureMax: 28.49,
	// 			windSpeed: 2.1,
	// 			weatherDescription: 'overcast clouds',
	// 			humidity: 71,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '04n',
	// 			currentDate:
	// 				'Fri Jul 26 2024 12:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 27.68,
	// 			feelsLike: 30.42,
	// 			temperatureMin: 27.68,
	// 			temperatureMax: 27.68,
	// 			windSpeed: 1.69,
	// 			weatherDescription: 'overcast clouds',
	// 			humidity: 73,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '04n',
	// 			currentDate:
	// 				'Fri Jul 26 2024 15:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 27.25,
	// 			feelsLike: 29.68,
	// 			temperatureMin: 27.25,
	// 			temperatureMax: 27.25,
	// 			windSpeed: 1.58,
	// 			weatherDescription: 'overcast clouds',
	// 			humidity: 74,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '04d',
	// 			currentDate:
	// 				'Fri Jul 26 2024 18:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 28.28,
	// 			feelsLike: 31.07,
	// 			temperatureMin: 28.28,
	// 			temperatureMax: 28.28,
	// 			windSpeed: 1.71,
	// 			weatherDescription: 'overcast clouds',
	// 			humidity: 69,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '04d',
	// 			currentDate:
	// 				'Fri Jul 26 2024 21:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 30.34,
	// 			feelsLike: 33.71,
	// 			temperatureMin: 30.34,
	// 			temperatureMax: 30.34,
	// 			windSpeed: 2.48,
	// 			weatherDescription: 'overcast clouds',
	// 			humidity: 61,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '04d',
	// 			currentDate:
	// 				'Sat Jul 27 2024 00:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 30.69,
	// 			feelsLike: 34.67,
	// 			temperatureMin: 30.69,
	// 			temperatureMax: 30.69,
	// 			windSpeed: 6.53,
	// 			weatherDescription: 'overcast clouds',
	// 			humidity: 62,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '10d',
	// 			currentDate:
	// 				'Sat Jul 27 2024 03:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 29.57,
	// 			feelsLike: 33.8,
	// 			temperatureMin: 29.57,
	// 			temperatureMax: 29.57,
	// 			windSpeed: 6.18,
	// 			weatherDescription: 'light rain',
	// 			humidity: 69,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '04n',
	// 			currentDate:
	// 				'Sat Jul 27 2024 06:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 28.84,
	// 			feelsLike: 32.92,
	// 			temperatureMin: 28.84,
	// 			temperatureMax: 28.84,
	// 			windSpeed: 4.9,
	// 			weatherDescription: 'overcast clouds',
	// 			humidity: 73,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '04n',
	// 			currentDate:
	// 				'Sat Jul 27 2024 09:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 28.58,
	// 			feelsLike: 32.5,
	// 			temperatureMin: 28.58,
	// 			temperatureMax: 28.58,
	// 			windSpeed: 3.14,
	// 			weatherDescription: 'overcast clouds',
	// 			humidity: 74,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '10n',
	// 			currentDate:
	// 				'Sat Jul 27 2024 12:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 27.27,
	// 			feelsLike: 30.57,
	// 			temperatureMin: 27.27,
	// 			temperatureMax: 27.27,
	// 			windSpeed: 2.21,
	// 			weatherDescription: 'light rain',
	// 			humidity: 82,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '10n',
	// 			currentDate:
	// 				'Sat Jul 27 2024 15:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 26.94,
	// 			feelsLike: 29.88,
	// 			temperatureMin: 26.94,
	// 			temperatureMax: 26.94,
	// 			windSpeed: 1.29,
	// 			weatherDescription: 'light rain',
	// 			humidity: 83,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '10d',
	// 			currentDate:
	// 				'Sat Jul 27 2024 18:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 27.35,
	// 			feelsLike: 30.65,
	// 			temperatureMin: 27.35,
	// 			temperatureMax: 27.35,
	// 			windSpeed: 1.43,
	// 			weatherDescription: 'light rain',
	// 			humidity: 81,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '10d',
	// 			currentDate:
	// 				'Sat Jul 27 2024 21:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 28.67,
	// 			feelsLike: 32.54,
	// 			temperatureMin: 28.67,
	// 			temperatureMax: 28.67,
	// 			windSpeed: 4.08,
	// 			weatherDescription: 'light rain',
	// 			humidity: 73,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '10d',
	// 			currentDate:
	// 				'Sun Jul 28 2024 00:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 27.83,
	// 			feelsLike: 31.12,
	// 			temperatureMin: 27.83,
	// 			temperatureMax: 27.83,
	// 			windSpeed: 3.26,
	// 			weatherDescription: 'moderate rain',
	// 			humidity: 76,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '10d',
	// 			currentDate:
	// 				'Sun Jul 28 2024 03:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 26.74,
	// 			feelsLike: 29.41,
	// 			temperatureMin: 26.74,
	// 			temperatureMax: 26.74,
	// 			windSpeed: 0.77,
	// 			weatherDescription: 'light rain',
	// 			humidity: 83,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '10n',
	// 			currentDate:
	// 				'Sun Jul 28 2024 06:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 26.25,
	// 			feelsLike: 26.25,
	// 			temperatureMin: 26.25,
	// 			temperatureMax: 26.25,
	// 			windSpeed: 1.68,
	// 			weatherDescription: 'light rain',
	// 			humidity: 86,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '10n',
	// 			currentDate:
	// 				'Sun Jul 28 2024 09:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 26.23,
	// 			feelsLike: 26.23,
	// 			temperatureMin: 26.23,
	// 			temperatureMax: 26.23,
	// 			windSpeed: 2.2,
	// 			weatherDescription: 'light rain',
	// 			humidity: 85,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '10n',
	// 			currentDate:
	// 				'Sun Jul 28 2024 12:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 25.84,
	// 			feelsLike: 26.73,
	// 			temperatureMin: 25.84,
	// 			temperatureMax: 25.84,
	// 			windSpeed: 2.15,
	// 			weatherDescription: 'light rain',
	// 			humidity: 86,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '10n',
	// 			currentDate:
	// 				'Sun Jul 28 2024 15:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 26.04,
	// 			feelsLike: 26.04,
	// 			temperatureMin: 26.04,
	// 			temperatureMax: 26.04,
	// 			windSpeed: 3.31,
	// 			weatherDescription: 'light rain',
	// 			humidity: 86,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '10d',
	// 			currentDate:
	// 				'Sun Jul 28 2024 18:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 26.46,
	// 			feelsLike: 26.46,
	// 			temperatureMin: 26.46,
	// 			temperatureMax: 26.46,
	// 			windSpeed: 7.24,
	// 			weatherDescription: 'light rain',
	// 			humidity: 86,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '10d',
	// 			currentDate:
	// 				'Sun Jul 28 2024 21:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 25.97,
	// 			feelsLike: 25.97,
	// 			temperatureMin: 25.97,
	// 			temperatureMax: 25.97,
	// 			windSpeed: 5.64,
	// 			weatherDescription: 'moderate rain',
	// 			humidity: 89,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '10d',
	// 			currentDate:
	// 				'Mon Jul 29 2024 00:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 25.64,
	// 			feelsLike: 26.64,
	// 			temperatureMin: 25.64,
	// 			temperatureMax: 25.64,
	// 			windSpeed: 4.48,
	// 			weatherDescription: 'moderate rain',
	// 			humidity: 91,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '10d',
	// 			currentDate:
	// 				'Mon Jul 29 2024 03:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 25.79,
	// 			feelsLike: 26.75,
	// 			temperatureMin: 25.79,
	// 			temperatureMax: 25.79,
	// 			windSpeed: 4.45,
	// 			weatherDescription: 'moderate rain',
	// 			humidity: 89,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '10n',
	// 			currentDate:
	// 				'Mon Jul 29 2024 06:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 25.56,
	// 			feelsLike: 26.57,
	// 			temperatureMin: 25.56,
	// 			temperatureMax: 25.56,
	// 			windSpeed: 5.39,
	// 			weatherDescription: 'moderate rain',
	// 			humidity: 92,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '10n',
	// 			currentDate:
	// 				'Mon Jul 29 2024 09:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 25.38,
	// 			feelsLike: 26.35,
	// 			temperatureMin: 25.38,
	// 			temperatureMax: 25.38,
	// 			windSpeed: 5.45,
	// 			weatherDescription: 'moderate rain',
	// 			humidity: 91,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '10n',
	// 			currentDate:
	// 				'Mon Jul 29 2024 12:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 24.92,
	// 			feelsLike: 25.87,
	// 			temperatureMin: 24.92,
	// 			temperatureMax: 24.92,
	// 			windSpeed: 4.14,
	// 			weatherDescription: 'moderate rain',
	// 			humidity: 92,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '10n',
	// 			currentDate:
	// 				'Mon Jul 29 2024 15:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 25.36,
	// 			feelsLike: 26.22,
	// 			temperatureMin: 25.36,
	// 			temperatureMax: 25.36,
	// 			windSpeed: 3.5,
	// 			weatherDescription: 'light rain',
	// 			humidity: 87,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '04d',
	// 			currentDate:
	// 				'Mon Jul 29 2024 18:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 26.93,
	// 			feelsLike: 29.59,
	// 			temperatureMin: 26.93,
	// 			temperatureMax: 26.93,
	// 			windSpeed: 1.98,
	// 			weatherDescription: 'overcast clouds',
	// 			humidity: 80,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '04d',
	// 			currentDate:
	// 				'Mon Jul 29 2024 21:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 28.51,
	// 			feelsLike: 31.85,
	// 			temperatureMin: 28.51,
	// 			temperatureMax: 28.51,
	// 			windSpeed: 3.07,
	// 			weatherDescription: 'overcast clouds',
	// 			humidity: 71,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '04d',
	// 			currentDate:
	// 				'Tue Jul 30 2024 00:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 29.48,
	// 			feelsLike: 32.79,
	// 			temperatureMin: 29.48,
	// 			temperatureMax: 29.48,
	// 			windSpeed: 4.9,
	// 			weatherDescription: 'overcast clouds',
	// 			humidity: 65,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '04d',
	// 			currentDate:
	// 				'Tue Jul 30 2024 03:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 29.06,
	// 			feelsLike: 33.44,
	// 			temperatureMin: 29.06,
	// 			temperatureMax: 29.06,
	// 			windSpeed: 5.36,
	// 			weatherDescription: 'overcast clouds',
	// 			humidity: 73,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 		{
	// 			weatherIcon: '04n',
	// 			currentDate:
	// 				'Tue Jul 30 2024 06:00:00 GMT-0600 (Mountain Daylight Time)',
	// 			temperature: 28.15,
	// 			feelsLike: 32.16,
	// 			temperatureMin: 28.15,
	// 			temperatureMax: 28.15,
	// 			windSpeed: 3.62,
	// 			weatherDescription: 'overcast clouds',
	// 			humidity: 78,
	// 			cityName: 'Manila',
	// 			country: 'Philippines',
	// 			sunrise: '05:37:27',
	// 			sunset: '18:27:26',
	// 			unit: 'metric',
	// 		},
	// 	],
	// 	isValid: true,
	// 	isWeatherCardActive: true,
	// });

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
