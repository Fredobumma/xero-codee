import { ChooseUsCarousel } from "src/components";

const ChooseUs = () => (
	<section className="bg-[#F7F7FD] max-w-full mt-20 pt-[72px] pb-44 rounded-[35px] md:mb-10 lg:mb-[42px] lg:pb-52">
		<h2 className="relative lg:text-wrap max-w-[950px] mx-auto font-medium text-center text-[26px] leading-[62px] md:text-[40px]">
			Choose Us: Your Path to Innovation and{" "}
			<span className="bg-clip-text bg-[linear-gradient(180deg,_#3171de_26%,_#4AC0F2_50%)] text-transparent">
				Success
			</span>
			<svg
				width="90"
				height="82"
				viewBox="0 0 90 82"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="animate-pulse hidden absolute top-0 -right-20 xl:block"
			>
				<path
					opacity="0.8"
					d="M2.04425 45.8238L0.565934 68.4269C0.188206 74.2022 4.56383 79.1903 10.3392 79.568L35.0751 81.1858C37.7376 81.36 40.3663 80.512 42.4251 78.8147L83.619 44.8555C85.8497 43.0167 87.2216 40.338 87.4103 37.4533L89.1056 11.5304C89.5017 5.47447 84.6868 0.349376 78.618 0.366981L54.0381 0.438283C51.5489 0.445504 49.1436 1.33852 47.2528 2.95744L5.68576 38.5474C3.54142 40.3834 2.22849 43.0069 2.04425 45.8238Z"
					fill="url(#paint0_linear_0_234)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_0_234"
						x1="44.417"
						y1="0.514779"
						x2="-15"
						y2="111"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#62AE6E" />
						<stop offset="1" stopColor="#EDE14F" />
					</linearGradient>
				</defs>
			</svg>
		</h2>
		<ChooseUsCarousel />
	</section>
);

export default ChooseUs;
// Choose Us section
