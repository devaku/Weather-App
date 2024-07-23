function WeatherIcon({ svg, text }) {
	return (
		<>
			<div className="inline-block h-10">
				{/* Image */}
				<div className="w-full flex justify-center">{svg}</div>

				{/* Text */}
				<div className="text-xs text-white text-center">
					<p>{text}</p>
				</div>
			</div>
		</>
	);
}
export default WeatherIcon;
