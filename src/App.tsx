import { monitor, software_dev, techCraft } from "src/assets";
import "./App.css";

function App() {
	return (
		<>
			{/* Multidisciplinary teams cards */}
			<div className="flex flex-col items-center gap-[17px] mx-auto px-[28px] py-[34px] rounded-[35px] md:gap-20 lg:flex-row lg:gap-10 lg:px-[66px] lg:py-[32.5px] lg:w-auto xl:gap-[105px]">
				<div className="max-w-[329px]">
					<figure>
						<img
							src={monitor}
							width={50}
							height={50}
							alt="Monitor icon"
							className="w-[36.5px] md:w-[50px]"
						/>
					</figure>
					<h3 className="font-medium mt-[35px] mb-2 text-xl !leading-10 md:text-2xl lg:text-[28px]">
						Front-end
					</h3>
					<p className="text-xs text-[#525252] !leading-6 md:text-sm lg:text-base">
						Our frontend developers understand the delicate balance between
						aesthetics and functionality.
					</p>
				</div>
				<div className="max-w-[329px]">
					<figure>
						<img
							src={monitor}
							width={50}
							height={50}
							alt="Monitor icon"
							className="w-[36.5px] md:w-[50px]"
						/>
					</figure>
					<h3 className="font-medium mt-[35px] mb-2 text-xl !leading-10 md:text-2xl lg:text-[28px]">
						Front-end
					</h3>
					<p className="text-xs !leading-6 md:text-sm lg:text-base">
						Our frontend developers understand the delicate balance between
						aesthetics and functionality.
					</p>
				</div>
				<div className="max-w-[329px]">
					<figure>
						<img
							src={monitor}
							width={50}
							height={50}
							alt="Monitor icon"
							className="w-[36.5px] md:w-[50px]"
						/>
					</figure>
					<h3 className="font-medium mt-[35px] mb-2 text-xl !leading-10 md:text-2xl lg:text-[28px]">
						Front-end
					</h3>
					<p className="text-xs !leading-6 md:text-sm lg:text-base">
						Our frontend developers understand the delicate balance between
						aesthetics and functionality.
					</p>
				</div>
			</div>

			{/* Empowering cards */}
			<div className="max-w-[220px] p-5 pb-8 sm:max-w-[385px] lg:pb-[38px] lg:p-7">
				<figure>
					<img
						src={software_dev}
						width={50}
						height={50}
						alt="Software development icon"
						className="w-[36.5px] md:w-[50px]"
					/>
				</figure>
				<h3 className="font-medium mt-[35px] mb-2 text-xl !leading-[29px] md:text-2xl lg:text-[28px]">
					Custom SoftwareDevelopment
				</h3>
				<p className="text-xs !leading-[18px] md:text-sm lg:text-base">
					Create custom software tailored for your unique needs, including
					front-end, and core back-end technology.
				</p>
			</div>

			{/* Choose Us */}
			<div className="max-w-[282px] px-5 py-[27px] md:max-w-[385px] lg:px-7 lg:py-[33px]">
				<h3 className="font-medium text-lg !leading-6 md:text-2xl md:!leading-8">
					Expertise Across the Tech Spectrum
				</h3>
				<p className="text-xs !leading-[18px] mt-[18px] lg:text-base lg:!leading-6">
					Our team consists of seasoned developers, designers, and experts who
					excel in various areas of technology.
				</p>
			</div>

			{/* Brand count */}
			<div className="font-['DM_Sans'] max-w-[260px] text-[#1E1B39] sm:max-w-[389px]">
				<ul className="inline-flex">
					{Array.from({ length: 5 }).map((_item, i) => (
						<li key={i}> ⭐ </li>
					))}
				</ul>
				<h3 className="font-bold leading-6 mb-1.5 mt-[23px] md:text-2xl md:leading-9 md:mb-[9px] md:mt-[35px]">
					"Exceptional Solutions, Exceeded Expectations!"
				</h3>
				<p className="text-[11px] leading-5 text-[#6E6C83] md:text-lg md:!leading-[30px]">
					"Working with Nearshore has been an absolute pleasure. Their team took
					the time to understand our unique needs and delivered a solution that
					not only met but exceeded our expectations. Their expertise and
					commitment to excellence are truly commendable."
				</p>
				<div className="flex items-center gap-4 border-t border-[#DEDEE9] mt-[23px] pt-[11px] md:gap-[18px] md:mt-[35px] md:pt-5">
					<figure>
						<img
							src={techCraft}
							width={33}
							height={33}
							alt="Software development icon"
							className="w-[21px] md:w-[33px]"
						/>
					</figure>
					<div className="font-bold space-y-[1px] md:space-y-[2px]">
						<h4 className="text-[13px] leading-[18px] md:text-xl md:!leading-[27px]">
							Mary Johnson
						</h4>
						<p className="text-[9px] text-[#525252] leading-[18px] md:text-sm md:!leading-[16px]">
							CEO of TechCraft Solutions
						</p>
					</div>
				</div>
			</div>

			{/* Subscribe */}
			<div className="bg-[#203C86]/5 max-w-[338px] px-[30px] py-[31px] rounded-[30px] text-[#0A142F] sm:max-w-[369px] sm:px-[46px] sm:py-8">
				<h4 className="leading-7">Subscribe</h4>
				<form className="my-[18px] sm:mb-5 sm:mt-[15px]">
					<div className="bg-white border-2 border-[#E7E8F2] flex gap-2.5 justify-between max-w-[271px] overflow-hidden rounded-[30px] w-full focus-within:border-[#3171DE]">
						<input
							className="grow outline-none pl-[23px] text-sm placeholder:text-[#0A142F] placeholder:opacity-60"
							name="email"
							id="email"
							type="email"
							placeholder="Email address"
							minLength={5}
							maxLength={50}
						/>
						<button className="outline-none">
							<figure className="bg-[#3171DE] p-[18px] rounded-[30px]">
								<svg
									width="18"
									height="14"
									viewBox="0 0 18 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M10.6419 13.3047L16.8249 7.6652C17.3942 7.14567 17.3942 6.30357 16.8249 5.78564L10.6419 0.146151L8.58072 2.02691L12.2754 5.39609H0.548676L0.548676 8.05435H12.2754L8.58072 11.4247L10.6419 13.3047Z"
										fill="white"
									/>
								</svg>
							</figure>
						</button>
					</div>
				</form>
				<p className="text-xs leading-[20px]">
					Hello, we are Lift Media. Our goal is to translate the positive
					effects from revolutionizing how companies engage with their clients &
					their team.
				</p>
			</div>
		</>
	);
}

export default App;
