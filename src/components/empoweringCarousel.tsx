import { ReactNode } from "react";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "components/ui/carousel";

interface EmpoweringCarouselProps {
	cards: {
		title: string;
		description: ReactNode;
		icon: string;
	}[];
}

export default function EmpoweringCarousel({ cards }: EmpoweringCarouselProps) {
	return (
		<Carousel
			opts={{
				align: "start",
			}}
			className="mx-auto w-[90vw] max-w-[1440px] lg:hidden"
		>
			<CarouselContent>
				{cards.map(({ title, description, icon }, index) => (
					<CarouselItem key={index} className="mx-2.5 my-10">
						<div className="flex flex-col max-w-[220px] min-h-full p-5 pb-8 rounded-[25px] shadow-[0_4px_10px_rgba(0,0,0,0.13)] md:rounded-[35px] md:shadow-[0_6px_14px_rgba(0,0,0,0.13)] sm:max-w-[385px]">
							<figure>
								<img
									src={icon}
									width={50}
									height={50}
									alt="Software development icon"
									className="w-[36.5px] md:w-[50px]"
								/>
							</figure>
							<div className="mt-auto">
								<h3 className="break-words font-medium mt-[35px] mb-2 text-xl !leading-[29px] md:text-2xl">
									{title}
								</h3>
								<p className="text-[#525252] text-xs !leading-[18px] md:text-sm">
									{description}
								</p>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
// Choose us section carousel
