import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "components/ui/carousel";

export default function ChooseUsCarousel() {
	const cards = [
		{
			title: "Expertise Across the Tech Spectrum",
			description:
				"Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.",
		},
		{
			title: "Proven Track Record of Success:",
			description:
				"Our portfolio is a testament to our ability to deliver impactful results.",
			colorStyles:
				"bg-[linear-gradient(233deg,#62AE6E_50%,#ede04fcc_100%)] text-white",
		},
		{
			title: "Collaborative Approach, Transparent Communication:",
			description: "We believe in working hand-in-hand with our clients.",
		},
		{
			title: "Tailored Solutions for Your Unique Needs:",
			description: "We understand that no two projects are alike.",
			colorStyles:
				"bg-[linear-gradient(226deg,#3171DE_0%,#4AC0F2_100%)] text-white",
		},
	];

	return (
		<Carousel
			opts={{
				align: "start",
			}}
			className="mx-auto w-[90vw] max-w-[1440px]"
		>
			<CarouselContent>
				{cards.map(({ title, description, colorStyles }, index) => (
					<CarouselItem key={index} className="mx-2.5 my-10">
						<div
							className={`flex flex-col justify-center min-w-[282px] max-w-[282px] h-[168px] px-5 py-[27px] rounded-[25px] shadow-[0_4px_10px_rgba(0,0,0,0.13)] md:shadow-[0_6px_14px_rgba(0,0,0,0.13)] md:min-w-[385px] md:max-w-[385px] md:h-[230px] md:rounded-[35px] lg:px-7 lg:py-[33px] ${
								colorStyles ? colorStyles : ""
							}`}
						>
							<h3 className="font-medium text-lg !leading-6 md:text-2xl md:!leading-8">
								{title}
							</h3>
							<p className="text-xs !leading-[18px] mt-[18px] lg:text-base lg:!leading-6">
								{description}
							</p>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<svg
				width="90"
				height="82"
				viewBox="0 0 90 82"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="absolute left-40 top-[350px] hidden xl:block"
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
			<CarouselPrevious className="top-80 mx-auto inset-x-0 right-20 lg:top-96" />
			<CarouselNext className="top-80 mx-auto inset-x-0 left-20 lg:top-96" />
		</Carousel>
	);
}
// Choose us section carousel
