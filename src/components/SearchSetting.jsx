import { useState } from 'react';
function SearchSetting({ searchSetting, setSearchSetting }) {
	const [setting, setSetting] = useState(searchSetting.weatherSetting);

	function handleCheckedChange(e) {
		setSetting(e.currentTarget.value);

		let temp = searchSetting;
		temp.weatherSetting = e.currentTarget.value;
		setSearchSetting(temp);
	}

	return (
		<>
			<div className="unselectable flex items-center justify-evenly  text-white">
				<div>
					<input
						className="mr-2"
						type="radio"
						name="search"
						id=""
						radioGroup="search"
						value="current"
						checked={setting == 'current'}
						onChange={handleCheckedChange}
					/>
					<label className="inline-block w-32" htmlFor="current">
						Current Weather
					</label>
				</div>
				<div>
					<input
						className="mr-2"
						type="radio"
						name="search"
						value="forecast"
						id=""
						checked={setting == 'forecast'}
						onChange={handleCheckedChange}
					/>
					<label className="inline-block w-32" htmlFor="forecast">
						5 Day Forecast
					</label>
				</div>
			</div>
		</>
	);
}

export default SearchSetting;
