import { driver, monitor, simcard } from "src/assets";

const Teams = () => {
	const teams = [
		{
			icon: monitor,
			title: "Front-end",
			description:
				"Our frontend developers understand the delicate balance between aesthetics and functionality.",
		},
		{
			icon: simcard,
			title: "Back-end",
			description:
				"Our backend developers are the architects of efficiency and security. They design and build the databases andAPIs.",
		},
		{
			icon: driver,
			title: "Data Analysts",
			description:
				"Our data analytics team is a blend of mathematicians, statisticians, and technology enthusiasts.",
		},
	];

	return (
		<section className="mb-[34px] mt-[42px] pb-7 lg:my-0 lg:py-[72px] space-y-[45px]">
			<p className="font-medium text-2xl leading-[43px] sm:text-center lg:text-[32px] lg:leading-[60px]">
				We have multidisciplinary teams to meet any{" "}
				<span className="bg-clip-text bg-[linear-gradient(180deg,_#704af2_26%,_#3171de_50%)] text-transparent">
					challenge.
				</span>
			</p>

			{/* Multidisciplinary teams cards */}
			<div className="flex flex-col items-center gap-[17px] mx-auto px-[28px] py-[34px] rounded-[35px] shadow-[0_6px_14px_rgba(0,0,0,0.13)] w-fit md:gap-20 lg:flex-row lg:gap-10 lg:px-[66px] lg:py-[32.5px] lg:w-auto xl:gap-[105px]">
				{teams.map(({ icon, title, description }, i) => (
					<div key={i} className="max-w-[329px]">
						<figure>
							<img
								src={icon}
								width={50}
								height={50}
								alt={`${title} icon`}
								className="w-[36.5px] md:w-[50px]"
							/>
						</figure>
						<h3 className="font-medium mt-4 mb-2 text-xl !leading-10 md:mt-[35px] md:text-2xl lg:text-[28px]">
							{title}
						</h3>
						<p className="text-xs text-[#525252] !leading-6 md:text-sm lg:text-base">
							{description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Teams;
// Multidisciplinary teams section
