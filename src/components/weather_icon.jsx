function WeatherIcon({ image, alt, text }) {
	return (
		<>
			<div className="inline-block h-10">
				{/* Image */}
				<div className="w-full flex justify-center">
					<img className="invert" src={image} alt={alt} />
				</div>

				{/* Text */}
				<div className="text-xs text-white">
					<p>{text}</p>
				</div>
			</div>
		</>
	);
}
export default WeatherIcon;
