import { useState } from 'react';
import SearchSetting from './SearchSetting';
import TemperatureSetting from './TemperatureSetting';
import svgCross from '../assets/cross.svg';

function Sidebar({ displaySidebar, setDisplaySidebar }) {
	let [hideSidebar, setHideSidebar] = useState(true);
	function handleOnClick(e) {
		setDisplaySidebar(false);
		e.stopPropagation();
	}

	return (
		<>
			<div
				className={
					' absolute bottom-2 w-full h-full bg-gradient-to-b from-black ' +
					(displaySidebar ? 'slide-in' : 'slide-out hidden')
				}>
				<div className="">
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
