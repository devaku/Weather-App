import { useState } from 'react';
function TemperatureSetting({ searchSetting, setSearchSetting }) {
	const [setting, setSetting] = useState(searchSetting.units);

	function handleCheckedChange(e) {
		setSetting(e.currentTarget.value);

		let temp = searchSetting;
		temp.units = e.currentTarget.value;
		setSearchSetting(temp);
	}

	return (
		<>
			<div className="unselectable flex items-center justify-evenly  text-white">
				<div>
					<input
						className="mr-2"
						type="radio"
						name="temperature"
						id=""
						value="metric"
						checked={setting == 'metric'}
						onChange={handleCheckedChange}
					/>
					<label className="inline-block w-32" htmlFor="current">
						Celsius
					</label>
				</div>
				<div>
					<input
						className="mr-2"
						type="radio"
						name="temperature"
						value="imperial"
						id=""
						checked={setting == 'imperial'}
						onChange={handleCheckedChange}
					/>
					<label className="inline-block w-32" htmlFor="forecast">
						Farenheit
					</label>
				</div>
			</div>
		</>
	);
}

export default TemperatureSetting;
