import {
	data_science,
	design_brush,
	mobile,
	platform,
	software_dev,
	testing,
} from "src/assets";
import { EmpoweringCarousel } from "src/components";

const Empowering = () => {
	const absoluteUrl = "https://www.bairesdev.com/solutions/custom-software/";

	// cards content
	const cards = [
		{
			title: "Custom SoftwareDevelopment",
			description: (
				<span>
					Create{" "}
					<a target="_blank" href={absoluteUrl} className="underline">
						custom software
					</a>{" "}
					tailored for your unique needs, including{" "}
					<a target="_blank" href={absoluteUrl} className="underline">
						front-end
					</a>
					, and core{" "}
					<a target="_blank" href={absoluteUrl} className="underline">
						back-end
					</a>{" "}
					technology.
				</span>
			),
			icon: software_dev,
		},
		{
			title: "QA and Testing",
			description: (
				<span>
					Create{" "}
					<a target="_blank" href={absoluteUrl} className="underline">
						custom software
					</a>{" "}
					tailored for your unique needs, including{" "}
					<a target="_blank" href={absoluteUrl} className="underline">
						front-end
					</a>
					, and core{" "}
					<a target="_blank" href={absoluteUrl} className="underline">
						back-end
					</a>{" "}
					technology.
				</span>
			),
			icon: testing,
		},
		{
			title: "AI and Data Science",
			description: (
				<span>
					Use leading{" "}
					<a target="_blank" href={absoluteUrl} className="underline">
						AI, machine learning
					</a>
					, and data engineering technologies to unlock business value.
				</span>
			),
			icon: data_science,
		},
		{
			title: "UX/UI Design",
			description: (
				<span>
					Create beautiful, pixel-perfect, and easy-to-use{" "}
					<a target="_blank" href={absoluteUrl} className="underline">
						designs
					</a>{" "}
					that delight your end users.
				</span>
			),
			icon: design_brush,
		},
		{
			title: "Mobile App Development",
			description: (
				<span>
					Build performant, scalable, and secure{" "}
					<a target="_blank" href={absoluteUrl} className="underline">
						mobile applications
					</a>{" "}
					for{" "}
					<a target="_blank" href={absoluteUrl} className="underline">
						iOS
					</a>{" "}
					and{" "}
					<a target="_blank" href={absoluteUrl} className="underline">
						Android
					</a>{" "}
					devices.
				</span>
			),
			icon: mobile,
		},
		{
			title: "Platform and Infrastructure",
			description: (
				<span>
					Ensure applications are secure, fault tolerant and highly available
					with our{" "}
					<a target="_blank" href={absoluteUrl} className="underline">
						DevOps
					</a>{" "}
					and{" "}
					<a target="_blank" href={absoluteUrl} className="underline">
						Security
					</a>{" "}
					engineers.
				</span>
			),
			icon: platform,
		},
	];

	return (
		<section
			id="services"
			className="pt-[35px] md:pt-16 md:pb-10 lg:py-32 lg:space-y-20"
		>
			<h2 className="lg:text-wrap max-w-[300px] sm:max-w-[600px] lg:max-w-[950px] mx-auto font-medium text-center text-2xl leading-[43px] md:text-[40px] md:leading-[60px]">
				<span data-aos="fade-down" className="relative">
					Empowering Your Digital Vision: Our Comprehensive Tech Services.
					{/* Svg background vectors */}
					<svg
						width="90"
						height="82"
						viewBox="0 0 90 82"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="animate-pulse hidden absolute top-0 right-[105%] lg:block"
					>
						<path
							opacity="0.8"
							d="M2.04425 45.8238L0.565934 68.4269C0.188206 74.2022 4.56383 79.1903 10.3392 79.568L35.0751 81.1858C37.7376 81.36 40.3663 80.512 42.4251 78.8147L83.619 44.8555C85.8497 43.0167 87.2216 40.338 87.4103 37.4533L89.1056 11.5304C89.5017 5.47447 84.6868 0.349376 78.618 0.366981L54.0381 0.438283C51.5489 0.445504 49.1436 1.33852 47.2528 2.95744L5.68576 38.5474C3.54142 40.3834 2.22849 43.0069 2.04425 45.8238Z"
							fill="url(#paint0_linear_0_235)"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_0_235"
								x1="44.417"
								y1="0.514779"
								x2="45.3332"
								y2="81.3877"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#3171DE" />
								<stop offset="1" stopColor="#4AC0F2" />
							</linearGradient>
						</defs>
					</svg>
					<svg
						width="65"
						height="60"
						viewBox="0 0 65 60"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="animate-pulse absolute top-0 right-[105%] lg:hidden"
					>
						<path
							opacity="0.8"
							d="M1.22097 33.9311L0.142446 50.4214C-0.13313 54.6349 3.05916 58.274 7.27264 58.5496L25.3191 59.7299C27.2615 59.8569 29.1793 59.2383 30.6813 58.0001L60.7349 33.2247C62.3622 31.8831 63.3631 29.9289 63.5008 27.8243L64.7376 8.91192C65.0266 4.49376 61.5139 0.754688 57.0863 0.767532L39.1537 0.819551C37.3377 0.824819 35.5829 1.47633 34.2034 2.65743L3.87768 28.6225C2.31325 29.962 1.35539 31.876 1.22097 33.9311Z"
							fill="url(#paint0_linear_0_479)"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_0_479"
								x1="32.1345"
								y1="0.87536"
								x2="32.803"
								y2="59.8772"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#3171DE" />
								<stop offset="1" stopColor="#4AC0F2" />
							</linearGradient>
						</defs>
					</svg>
				</span>
			</h2>

			{/* Carousel for smaller screens */}
			<EmpoweringCarousel cards={cards} />

			{/* Grid for wider screens */}
			<div className="hidden relative gap-[30px] max-w-[1260px] mx-auto lg:grid grid-cols-3 justify-items-center xl:gap-x-[52px] xl:gap-y-12">
				{cards.map(({ title, description, icon }, index) => (
					<div
						key={index}
						className="bg-white flex flex-col min-h-full rounded-[35px] shadow-[0_6px_14px_rgba(0,0,0,0.13)] max-w-[385px] pb-[38px] p-7"
					>
						<figure>
							<img
								src={icon}
								width={50}
								height={50}
								alt="Software development icon"
								className="w-[50px]"
							/>
						</figure>
						<div className="mt-auto">
							<h3 className="break-all font-medium mt-[35px] mb-2 text-[28px] leading-10 xl:break-keep">
								{title}
							</h3>
							<p className="text-[#525252] text-base leading-6">
								{description}
							</p>
						</div>
					</div>
				))}

				{/* svg background vectors */}
				<svg
					width="179"
					height="176"
					viewBox="0 0 179 176"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="absolute top-[28%] right-[25%] -z-10"
				>
					<path
						opacity="0.8"
						d="M0.543479 106.274L0.54328 153.938C0.543229 166.117 10.4159 175.99 22.5946 175.99L74.7563 175.99C80.3707 175.99 85.7738 173.848 89.8637 170.002L171.698 93.039C176.129 88.8715 178.642 83.0586 178.642 76.9755L178.642 22.3109C178.642 9.54062 167.828 -0.559627 155.087 0.310723L103.485 3.83582C98.2597 4.1928 93.3317 6.39822 89.5838 10.0572L7.19053 90.4955C2.94007 94.6451 0.543504 100.334 0.543479 106.274Z"
						fill="url(#paint0_linear_0_204)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_0_204"
							x1="83.294"
							y1="5.31763"
							x2="96.3234"
							y2="175.005"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#62AE6E" />
							<stop offset="1" stopColor="#EDE14F" />
						</linearGradient>
					</defs>
				</svg>
				<svg
					width="179"
					height="176"
					viewBox="0 0 179 176"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="absolute bottom-[15%] left-[23%] -z-10"
				>
					<path
						opacity="0.8"
						d="M0.54348 106.274L0.54328 153.938C0.543229 166.117 10.4159 175.99 22.5946 175.99L74.7563 175.99C80.3707 175.99 85.7738 173.848 89.8637 170.002L171.698 93.039C176.129 88.8715 178.642 83.0586 178.642 76.9755L178.642 22.3109C178.642 9.54062 167.828 -0.559627 155.087 0.310723L103.485 3.83581C98.2597 4.1928 93.3317 6.39822 89.5838 10.0572L7.19053 90.4954C2.94007 94.6451 0.543505 100.334 0.54348 106.274Z"
						fill="url(#paint0_linear_0_205)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_0_205"
							x1="83.294"
							y1="5.31763"
							x2="96.3234"
							y2="175.005"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#3171DE" />
							<stop offset="1" stopColor="#4AC0F2" />
						</linearGradient>
					</defs>
				</svg>
			</div>
		</section>
	);
};

export default Empowering;
// Empowering digital vision section.
