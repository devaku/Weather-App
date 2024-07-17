import SearchSetting from './SearchSetting';
import TemperatureSetting from './TemperatureSetting';
import svgCross from '../assets/cross.svg';

function Sidebar({ displaySidebar, setDisplaySidebar }) {
	function handleOnClick(e) {
		setDisplaySidebar(false);
		e.stopPropagation();
	}

	// function handleAnimationEnd(e) {
	// 	if (e.animationName == 'slide-in') {
	// 		setDisplaySidebar(false);
	// 	} else {
	// 		setDisplaySidebar(true);
	// 	}
	// }

	return (
		<>
			<div
				// onAnimationEnd={handleAnimationEnd}
				className={
					'absolute w-full bottom-2 h-full bg-gradient-to-b from-black ' +
					(displaySidebar ? 'slide-in ' : 'slide-out')
				}>
				<div className="py-5 w-5/12 mx-auto">
					{/* Setting Titlebar */}
					<div className="flex items-center">
						{/* Burger Close */}
						<div className="w-10 h-10" onClick={handleOnClick}>
							<img
								className="invert w-full h-full"
								src={svgCross}
								alt="Close Settings"
							/>
						</div>
						{/* Text */}
						<div className="text-white text-lg">Settings</div>
					</div>
					<SearchSetting></SearchSetting>
					<TemperatureSetting></TemperatureSetting>
				</div>
			</div>
		</>
	);
}

export default Sidebar;
