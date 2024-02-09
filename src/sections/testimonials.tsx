import {
	testimonials_png,
	testimonials_png_x2,
	testimonials_webp,
	testimonials_webp_x2,
} from "src/assets";
import { TestimonialsCarousel } from "src/components";

const Testimonials = () => {
	return (
		<section className="pb-20 md:pb-40">
			<div className="lg:flex gap-10">
				<picture>
					<source
						srcSet={testimonials_png_x2}
						media="(min-width: 640px)"
						type="image/png"
					/>
					<source
						srcSet={testimonials_webp_x2}
						media="(min-width: 640px)"
						type="image/webp"
					/>
					<source srcSet={testimonials_png} type="image/png" />
					<source srcSet={testimonials_webp} type="image/webp" />
					<img
						src={testimonials_png_x2}
						alt="Call to action"
						width={770}
						height={409}
						className="w-auto mx-auto"
					/>
				</picture>
				<div className="max-w-[85vw] mx-auto mt-[38px] mb-[45px] space-y-[18px] text-center md:space-y-6 lg:max-w-[560px] lg:mx-0 lg:mt-10 lg:space-y-[38px] lg:text-left">
					<h2 className="font-medium text-[26px] leading-10 md:text-[40px] md:leading-[54px]">
						We've stopped counting. Over 500 brands count on us.
					</h2>
					<p className="text-[#525252] font-medium text-xs leading-3 md:text-xl md:leading-[25px]">
						Our 4,000+ team has expertise in almost everyprogramming language.
					</p>
				</div>
			</div>
			<TestimonialsCarousel />
		</section>
	);
};

export default Testimonials;
// Testimonials section
