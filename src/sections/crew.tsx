import {
	data_scientist,
	project_manager,
	qa_eng,
	software_developer,
	ux_designer,
} from "src/assets";

const Crew = () => {
	const crewMembers = [
		{ role: "Software Developers", img: software_developer },
		{ role: "QA Engineers", img: qa_eng },
		{ role: "UX Designers", img: ux_designer },
		{ role: "Data Scientists", img: data_scientist },
		{ role: "Project Managers", img: project_manager },
	];

	return (
		<section className="text-center py-[66px] lg:py-[90px]">
			<div className="relative flex flex-wrap justify-center w-fit mx-auto">
				{crewMembers.map(({ role, img }, i) => (
					<figure className="-mx-5 lg:-mx-[30px]" key={i}>
						<img
							src={img}
							width={209}
							height={209}
							alt={role}
							className="w-[152px] lg:w-[209px]"
						/>
						<figcaption className="font-medium max-w-[101px] mx-auto text-lg leading-[23px] lg:max-w-[139px] lg:text-2xl lg:leading-8">
							{role}
						</figcaption>
					</figure>
				))}

				{/* Svg background vectors */}
				<svg
					width="128"
					height="117"
					viewBox="0 0 128 117"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="animate-pulse hidden lg:block absolute -left-[12%] top-[25%] -z-10"
				>
					<path
						opacity="0.8"
						d="M2.25659 65.5585L0.125498 98.1423C-0.419021 106.468 5.88873 113.658 14.2143 114.203L49.8727 116.535C53.7109 116.786 57.5002 115.564 60.4681 113.117L119.852 64.1627C123.068 61.5119 125.045 57.6504 125.317 53.4919L127.761 16.1224C128.332 7.39237 121.391 0.00422587 112.643 0.029604L77.209 0.132391C73.6208 0.1428 70.1533 1.43014 67.4276 3.76392L7.50605 55.0691C4.41485 57.7158 2.52218 61.4977 2.25659 65.5585Z"
						fill="url(#paint0_linear_0_410)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_0_410"
							x1="63.3396"
							y1="0.242664"
							x2="64.6604"
							y2="116.826"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#62AE6E" />
							<stop offset="1" stopColor="#EDE14F" />
						</linearGradient>
					</defs>
				</svg>

				<svg
					width="128"
					height="117"
					viewBox="0 0 128 117"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="animate-pulse hidden lg:block absolute -right-[13%] top-[15%] -z-10"
				>
					<path
						opacity="0.8"
						d="M2.25659 65.5585L0.125498 98.1423C-0.419021 106.468 5.88873 113.658 14.2143 114.203L49.8727 116.535C53.7109 116.786 57.5002 115.564 60.4681 113.117L119.852 64.1627C123.068 61.5119 125.045 57.6504 125.317 53.4919L127.761 16.1224C128.332 7.39237 121.391 0.00422587 112.643 0.029604L77.209 0.132391C73.6208 0.1428 70.1533 1.43014 67.4276 3.76392L7.50605 55.0691C4.41485 57.7158 2.52218 61.4977 2.25659 65.5585Z"
						fill="url(#paint0_linear_0_409)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_0_409"
							x1="63.3396"
							y1="0.242664"
							x2="64.6604"
							y2="116.826"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#3171DE" />
							<stop offset="1" stopColor="#4AC0F2" />
						</linearGradient>
					</defs>
				</svg>
			</div>
			<h2 className="font-medium my-4 text-[26px] leading-[62px] md:text-[40px] md:my-[57px]">
				Let's Form Your Crew.
			</h2>
			<button className="bg-[#3171DE] rounded-[42px] font-medium text-white py-[15px] px-[19px] md:py-[18px] md:px-[25px] md:rounded-[50px] transition ease-in-out duration-300 hover:scale-95 focus:scale-95">
				Schedule a Call
			</button>
		</section>
	);
};

export default Crew;
// Crew section
