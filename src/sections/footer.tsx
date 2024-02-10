import { facebook, linkedin, logo, x_twitter } from "src/assets";

const Footer = () => {
	const items = [
		{
			title: "Product",
			list: [
				"Employee database",
				"Payroll",
				"Absences",
				"Time tracking",
				"Shift planner",
				"Recruiting",
			],
		},
		{ title: "Information", list: ["FAQ", "Blog", "Support"] },
		{
			title: "Company",
			list: ["About us", "Careers", "Contact us", "Lift Media"],
		},
	];

	const socialLinks = [
		{ path: "https://linkedin.com", src: linkedin },
		{ path: "https://facebook.com", src: facebook },
		{ path: "https://twitter.com", src: x_twitter },
	];

	const navLinks = ["Terms", "Privacy", "Cookies"];

	return (
		<footer className="text-[#0A142F] divide-y divide-[#0A142F]/6 mt-28 pb-6 pt-16 sm:mt-40 sm:pb-0 sm:pt-[102px] space-y-[49px] md:mt-60 lg:-mb-5 lg:px-[133px]">
			<div className="flex flex-wrap gap-[70px] sm:justify-center lg:justify-between">
				{items.map(({ title, list }, i) => (
					<div key={i}>
						<h4 className="leading-[28px] mb-[15px]">{title}</h4>
						<ul className="opacity-50 space-y-4">
							{list.map((listItem, i) => (
								<li key={i}>
									<a href="#">{listItem}</a>
								</li>
							))}
						</ul>
					</div>
				))}

				{/* Subscribe form */}
				<div className="bg-[#203C86]/5 max-w-[338px] mx-auto w-full px-[30px] py-[31px] rounded-[30px] text-[#0A142F] sm:max-w-[369px] sm:px-[46px] sm:py-8 xl:mx-0">
					<h4 className="leading-7">Subscribe</h4>
					<form className="my-[18px] sm:mb-5 sm:mt-[15px]">
						<div className="bg-white border-2 border-[#E7E8F2] flex gap-2.5 justify-between overflow-hidden rounded-[30px] focus-within:border-[#3171DE]">
							<input
								className="grow w-1/2 outline-none pl-[23px] text-sm placeholder:text-[#0A142F] placeholder:opacity-60"
								name="email"
								id="email"
								type="email"
								placeholder="Email address"
								minLength={5}
								maxLength={50}
							/>
							<button className="block outline-none">
								<figure className="bg-[#3171DE] p-[18px] rounded-[30px]">
									<svg
										width="18"
										height="14"
										viewBox="0 0 18 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
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
						effects from revolutionizing how companies engage with their clients
						& their team.
					</p>
				</div>
			</div>

			<div className="flex flex-wrap items-center gap-y-5 gap-x-7 pt-[49px] sm:justify-between">
				<div className="flex gap-4 w-full sm:w-auto sm:order-last">
					{socialLinks.map(({ path, src }, i) => (
						<figure key={i}>
							<a
								href={path}
								className="flex place-items-center justify-center border border=[#0A142F]/10 rounded-full w-[38px] h-[35px]"
							>
								<img src={src} alt="Social logo" width="auto" height="auto" />
							</a>
						</figure>
					))}
				</div>
				<figure>
					<a href="/">
						<img src={logo} alt="App logo" width="auto" height="auto" />
					</a>
				</figure>
				<ul className="inline-flex gap-11">
					{navLinks.map((link, i) => (
						<li className="text-sm" key={i}>
							<a href="#">{link}</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
// Footer section.
