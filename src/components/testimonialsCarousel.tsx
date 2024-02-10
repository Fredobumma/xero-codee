import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "components/ui/carousel";
import { innovateNow, techCraft, visionary } from "src/assets";

export default function TestimonialsCarousel() {
	const cards = [
		{
			title: `"Exceptional Solutions, Exceeded Expectations!"`,
			description: `"Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable."`,
			icon: techCraft,
			testimonyBy: "Mary Johnson",
			position: "CEO of TechCraft Solutions",
		},
		{
			title: `"Transformed Our Business with Innovative Tech!"`,
			description: `"We owe a significant part of our success to [Company Name]. Their custom software solution streamlined our processes, saving us time and resources. Their team's dedication to innovation and problem-solving is unmatched. We're grateful for their partnership."`,
			icon: innovateNow,
			testimonyBy: "Mark Williams",
			position: "COO of InnovateNow Inc",
		},
		{
			title: `"Sculpted User Experiences Beyond Imagination!"`,
			description: `"The UI/UX design crafted by [Company Name] turned our app into a masterpiece. The attention to detail, intuitive design, and user-centric approach have resulted in rave reviews from our customers. Their design expertise has taken our brand to a whole new level."`,
			icon: visionary,
			testimonyBy: "Emily Clark",
			position: "CMO of Visionary Apps",
		},
		{
			title: `"Sculpted User Experiences Beyond Imagination!"`,
			description: `"The UI/UX design crafted by [Company Name] turned our app into a masterpiece. The attention to detail, intuitive design, and user-centric approach have resulted in rave reviews from our customers. Their design expertise has taken our brand to a whole new level."`,
			icon: visionary,
			testimonyBy: "Emily Clark",
			position: "CMO of Visionary Apps",
		},
	];

	return (
		<Carousel
			opts={{
				align: "start",
			}}
			className="mx-auto w-[90vw] max-w-[1440px] xl:-mt-[20%]"
		>
			<CarouselContent>
				{cards.map(
					({ title, description, icon, testimonyBy, position }, index) => (
						<CarouselItem key={index} className="mx-2.5 my-10">
							<div className="flex flex-col bg-white font-['DM_Sans'] h-full max-w-[260px] p-[22px] rounded-[14px] shadow-[0px_2px_6px_rgba(13,10,44,0.06)] text-[#1E1B39] md:max-w-[389px] md:p-[34px] md:rounded-[22px] md:shadow-[0px_3px_9px_rgba(13,10,44,0.06)]">
								<ul className="inline-flex">
									{Array.from({ length: 5 }).map((_item, i) => (
										<li key={i}> ⭐ </li>
									))}
								</ul>
								<h3 className="font-bold leading-6 mb-1.5 mt-[23px] md:text-2xl md:leading-9 md:mb-[9px] md:mt-[35px]">
									{title}
								</h3>
								<p className="text-[11px] leading-5 text-[#6E6C83] mb-[23px] md:mb-[35px] md:text-lg md:!leading-[30px]">
									{description}
								</p>
								<div className="flex items-center gap-4 border-t border-[#DEDEE9] mt-auto pt-[11px] md:gap-[18px] md:mt-auto md:pt-5">
									<figure>
										<img
											src={icon}
											width={33}
											height={33}
											alt="Software development icon"
											className="w-[23px] md:w-auto"
										/>
									</figure>
									<div className="font-bold space-y-[1px] md:space-y-[2px]">
										<h4 className="text-[13px] leading-[18px] md:text-xl md:!leading-[27px]">
											{testimonyBy}
										</h4>
										<p className="text-[9px] text-[#525252] leading-[18px] md:text-sm md:!leading-[16px]">
											{position}
										</p>
									</div>
								</div>
							</div>
						</CarouselItem>
					),
				)}
			</CarouselContent>
			<svg
				width="179"
				height="176"
				viewBox="0 0 179 176"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="hidden xl:block absolute bottom-[40%] right-[5%] -z-10"
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
			<CarouselPrevious className="bg-[#F7F7FD] top-[500px] mx-auto inset-x-0 right-20 md:top-[750px]" />
			<CarouselNext className="bg-[#F7F7FD] top-[500px] mx-auto inset-x-0 left-20 md:top-[750px]" />
		</Carousel>
	);
}
// Testimonials section carousel
