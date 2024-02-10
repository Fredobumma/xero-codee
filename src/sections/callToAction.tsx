import {
	call_to_action_png,
	call_to_action_png_x2,
	call_to_action_webp,
	call_to_action_webp_x2,
} from "src/assets";

const CallToAction = () => (
	<section>
		<div className="bg-callToAction max-w-[1344px] mt-6 pb-[132px] pt-28 px-3.5 relative rounded-[35px] sm:pb-[295px] md:mt-8 lg:mt-10">
			<h2 className="font-semibold text-center text-white text-[32px] leading-[48px] lg:text-5xl lg:leading-[68px]">
				Ready to Transform Your Vision into Reality? Let's Get Started!
			</h2>
			<button className="block bg-white font-semibold mt-[42px] mx-auto rounded-[50px] text-[#5E5DEF] py-[18px] px-[25px]">
				Schedule a Call
			</button>
			<picture className="absolute -bottom-28 inset-x-0 mx-auto sm:-bottom-40 md:-bottom-60">
				<source
					srcSet={call_to_action_png_x2}
					media="(min-width: 640px)"
					type="image/png"
				/>
				<source
					srcSet={call_to_action_webp_x2}
					media="(min-width: 640px)"
					type="image/webp"
				/>
				<source srcSet={call_to_action_png} type="image/png" />
				<source srcSet={call_to_action_webp} type="image/webp" />
				<img
					src={call_to_action_png_x2}
					alt="Call to action"
					width={770}
					height={409}
					className="w-auto mx-auto"
				/>
			</picture>
		</div>
	</section>
);

export default CallToAction;
// Call to action section
