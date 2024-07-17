import { useState } from 'react';
function TemperatureSetting({ setTemperatureSetting }) {
	const [setting, setSetting] = useState('c');

	function handleCheckedChange(e) {
		setSetting(e.currentTarget.value);
		setTemperatureSetting(e.currentTarget.value);
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
						value="c"
						checked={setting == 'c'}
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
						value="f"
						id=""
						checked={setting == 'f'}
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
