function CityName({ address }) {
	if (address) {
		return (
			<>
				<div className="mb-2.5 w-full">
					<div className="text-center text-white text-2xl md:text-4xl md:mt-3">
						{address}
					</div>
				</div>
			</>
		);
	} else {
		return null;
	}
}

export default CityName;
