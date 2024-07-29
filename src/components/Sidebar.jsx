import SearchSetting from './SearchSetting';
import TemperatureSetting from './TemperatureSetting';
import SvgCross from './svgs/SvgCross';

function Sidebar({
	displaySidebar,
	setDisplaySidebar,
	searchSetting,
	setSearchSetting,
}) {
	function handleOnClick(e) {
		setDisplaySidebar(false);
		e.stopPropagation();
	}

	return (
		<>
			<div
				// onAnimationEnd={handleAnimationEnd}
				className={
					'absolute z-10 w-full bottom-2 h-full bg-gradient-to-b from-black from-30% via-black via-10%  side-bar ' +
					(displaySidebar ? 'slide-in-from-top ' : 'slide-out-to-top')
				}>
				<div className="py-5 w-full md:w-5/12 mx-auto">
					{/* Setting Titlebar */}
					<div className="flex items-center">
						{/* Burger Close */}
						<div
							className="w-10 h-10 ml-[5px] md:m-0"
							onClick={handleOnClick}>
							<div className="w-full h-full">
								<SvgCross twColor="fill-white"></SvgCross>
							</div>
							{/* <img
								className="invert w-full h-full"
								src={svgCross}
								alt="Close Settings"
							/> */}
						</div>
						{/* Text */}
						<div className="text-white text-lg">Settings</div>
					</div>
					<SearchSetting
						searchSetting={searchSetting}
						setSearchSetting={setSearchSetting}></SearchSetting>
					<TemperatureSetting
						searchSetting={searchSetting}
						setSearchSetting={
							setSearchSetting
						}></TemperatureSetting>
				</div>
			</div>
		</>
	);
}

export default Sidebar;
