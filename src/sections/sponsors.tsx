import Marquee from "react-fast-marquee";
import { google, lg, microsoft, samsung, slack, sony } from "src/assets";

const Sponsors = () => {
	const logos = [
		{ name: "Samsung", icon: samsung },
		{ name: "Microsoft", icon: microsoft },
		{ name: "Google", icon: google },
		{ name: "Slack", icon: slack },
		{ name: "Lg", icon: lg },
		{ name: "Sony", icon: sony },
	];

	const renderLogos = logos.map(({ name, icon }, i) => (
		<figure key={i} className="scale-90 lg:mx-[30px] lg:scale-100 xl:mx-10">
			<img src={icon} alt={`${name} Logo`} width="auto" height="auto" />
		</figure>
	));

	return (
		<section className="relative bg-[#F7F7FD] mt-[17px] pb-[52px] pt-[65px] px-[18px] rounded-[14px] text-center sm:rounded-[35px] md:mt-[100px] md:pb-12 md:pt-[77px]">
			<h2 className="font-medium text-[26px] leading-10 md:text-[40px] md:leading-[60px]">
				Trusted by Leading Organizations
			</h2>
			<p className="font-medium max-w-[295px] mx-auto mt-3.5 mb-[46px] text-[#525252] text-xs leading-4 md:text-xl md:leading-[25px] md:max-w-[560px] lg:mt-[21px] lg:mb-[100px]">
				Our 4,000+ team has expertise in almost everyprogramming language.
			</p>
			<div className="flex flex-wrap items-center justify-center gap-x-[17px] gap-y-[50px] lg:hidden">
				{renderLogos}
			</div>
			<div className="hidden lg:block">
				<Marquee autoFill pauseOnClick pauseOnHover>
					{renderLogos}
				</Marquee>
			</div>
			<button className="bg-[#3171DE] mt-[50px] rounded-[42px] font-medium text-white py-[15px] px-[25px] md:py-[18px] md:px-[34px] md:rounded-[50px]">
				Our full repertorie
			</button>
			<svg
				width="90"
				height="82"
				viewBox="0 0 90 82"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="absolute w-9 top-[15px] left-4 sm:top-10 sm:left-10 lg:top-[36px] lg:left-[44px] lg:w-auto"
			>
				<path
					opacity="0.8"
					d="M2.04425 45.8238L0.565934 68.4269C0.188206 74.2022 4.56383 79.1903 10.3392 79.568L35.0751 81.1858C37.7376 81.36 40.3663 80.512 42.4251 78.8147L83.619 44.8555C85.8497 43.0167 87.2216 40.338 87.4103 37.4533L89.1056 11.5304C89.5017 5.47447 84.6868 0.349376 78.618 0.366981L54.0381 0.438283C51.5489 0.445504 49.1436 1.33852 47.2528 2.95744L5.68576 38.5474C3.54142 40.3834 2.22849 43.0069 2.04425 45.8238Z"
					fill="url(#paint0_linear_0_322)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_0_322"
						x1="44.417"
						y1="0.514779"
						x2="45.3332"
						y2="81.3877"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#62AE6E" />
						<stop offset="1" stop-color="#EDE14F" />
					</linearGradient>
				</defs>
			</svg>
		</section>
	);
};

export default Sponsors;
// Sponsors section.
