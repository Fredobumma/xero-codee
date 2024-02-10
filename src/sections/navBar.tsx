"use client";

import { useState } from "react";

import { logo } from "src/assets";
import { Menu, SwitchLang } from "src/components";

const NavBar = () => {
	const [position, setPosition] = useState("EN");
	const navLinks = ["Home", "About us", "Services", "Contact Us"];

	return (
		<nav className="bg-white flex gap-10 justify-between items-center mt-2 -mx-4 pb-6 px-4 sm:mt-0 sm:-mx-6 sm:px-6 md:-mt-2 md:mx-0 md:px-0 lg:-mt-6">
			<figure>
				<a href="/">
					<img src={logo} alt="App logo" width="auto" height="auto" />
				</a>
			</figure>
			<Menu links={navLinks} position={position} setPosition={setPosition} />
			<ul className="hidden bg-[#F7F7FD] font-semibold py-4 px-[68px] text-[#3056D3] rounded-[50px] lg:flex grow justify-between max-w-[600px]">
				{navLinks.map((link, i) => (
					<li
						key={i}
						className="transition ease-in-out duration-300 hover:scale-95 focus:scale-95"
					>
						<a href="#">{link}</a>
					</li>
				))}
			</ul>
			<div className="hidden lg:flex flex-nowrap items-center space-x-3.5">
				<SwitchLang position={position} setPosition={setPosition} />
				<button className="bg-[#3171DE] rounded-[42px] font-medium text-white py-[15px] px-9 md:py-[18px] md:px-[25px] md:rounded-[50px]">
					Schedule a Call
				</button>
			</div>
		</nav>
	);
};

export default NavBar;
// App Navbar
