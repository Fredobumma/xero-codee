import { logo } from "src/assets";
import { Menu, SwitchLang } from "src/components";

const NavBar = () => {
	const navLinks = ["Home", "About us", "Services", "Contact Us"];

	return (
		<nav className="flex gap-10 justify-between items-center mt-2 sm:mt-0 md:-mt-2 lg:-mt-6">
			<figure>
				<a href="/">
					<img src={logo} alt="App logo" width="auto" height="auto" />
				</a>
			</figure>
			<Menu links={navLinks} />
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
				<SwitchLang />
				<button className="bg-[#3171DE] rounded-[42px] font-medium text-white py-[15px] px-9 md:py-[18px] md:px-[25px] md:rounded-[50px]">
					Schedule a Call
				</button>
			</div>
		</nav>
	);
};

export default NavBar;
// App Navbar
