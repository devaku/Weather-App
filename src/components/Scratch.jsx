import { useState } from 'react';

function Scratch() {
	const [jsonResponse, setJsonResponse] = useState({});

	async function handleOnClick() {
		const url =
			'http://api.openweathermap.org/data/2.5/weather?q=Manila&appid=4072be8ec3e3b48f706b615618f5e8f7';

		let response = await fetch(url).then((res) => res.json());

		setJsonResponse(response);
	}

	return (
		<>
			<button className="">FETCH</button>
			<code></code>
		</>
	);
}

export default Scratch;
