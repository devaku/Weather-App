import { useState } from 'react';
function SearchSetting({ setSearchSetting }) {
	const [setting, setSetting] = useState('current');

	function handleCheckedChange(e) {
		setSetting(e.currentTarget.value);
		setSearchSetting(e.currentTarget.value);
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
					<label htmlFor="current">Current Weather</label>
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
					<label htmlFor="forecast">5 Day Forecast</label>
				</div>
			</div>
		</>
	);
}

export default SearchSetting;
