import magnifyingGlass from '../assets/magnifying_glass.svg';

function SearchBar() {
	return (
		<>
			<div class="m-2.5 bg-white flex rounded-md">
				{/* Textbox */}
				<div class="ml-2.5 my-[15px] w-full grow">
					<input
						class="w-full h-full"
						type="text"
						placeholder="Enter City Name"
						name=""
						maxLength={100}
						id=""
					/>
				</div>
				{/* Image */}
				<div class="ml-1 flex items-center bg-secondary rounded-r-md">
					<img
						class="w-[50px] invert"
						src={magnifyingGlass}
						alt="Search"
					/>
				</div>
			</div>
		</>
	);
}

export default SearchBar;
