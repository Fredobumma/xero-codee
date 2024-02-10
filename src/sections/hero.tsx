const Hero = () => {
	return (
		<header className="relative bg-cover bg-[url('/src/assets/hero-bg.webp')] bg-center bg-no-repeat h-auto -mt-2.5 -mx-4 pt-12 px-6 rounded-[34px] shadow-[rgba(17,17,26,0.1)_0px_4px_16px,_rgba(17,17,26,0.05)_0px_8px_32px] text-white -z-20 sm:-mx-6 sm:px-8 md:bg-[url('/src/assets/hero.webp')] md:bg-[length:70%_100%] md:bg-right md:bg-clip-border md:mr-0 md:mt-0 md:py-10 md:shadow-none md:text-inherit md:rounded-none md:rounded-r-[34px] md:z-0 lg:bg-[length:70%_90%] lg:py-14 xl:py-20 xl:bg-[length:70%_100%]">
			<div className="hidden md:block absolute inset-0 bg-[linear-gradient(95deg,_rgba(255,255,255,1)_60%,_rgba(0,0,0,0)_95%)] w-2/3" />
			<div className="md:relative md:z-20 md:w-1/2">
				<p
					data-aos="fade-right"
					data-aos-delay="40"
					className="font-semibold text-[#F3BC4C] text-xs sm:text-sm lg:text-xl"
				>
					TECH SERVICES
				</p>
				<h1
					data-aos="fade-right"
					data-aos-delay="50"
					className="font-bold break-all text-pretty text-[40px] leading-[48px] mt-7 mb-[22px] min-[320px]:break-normal md:font-semibold md:max-w-[500px] md:text-[56px] lg:font-medium lg:text-[72px] lg:leading-[80px]"
				>
					TechSynergy: Innovate, Create, Elevate
				</h1>
				<p
					data-aos="fade-right"
					data-aos-delay="60"
					className="font-medium text-sm sm:text-base lg:text-xl"
				>
					Unlocking Possibilities, One Code at a Time
				</p>
				<button
					data-aos="fade-right"
					data-aos-delay="70"
					className="bg-[#66B066] mt-[47px] mb-[42px] rounded-[42px] font-medium text-sm text-white py-[15px] px-9 sm:mb-20 md:mb-0 md:text-base md:py-[18px] md:px-[34px] md:rounded-[50px] transition ease-in-out duration-300 hover:bg-[#3171DE] focus:bg-[#3171DE]"
				>
					See projects
				</button>
			</div>
		</header>
	);
};

export default Hero;
// Hero section.
