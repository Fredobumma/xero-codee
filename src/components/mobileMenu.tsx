import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "components/ui/sheet";
import { MenuIcon } from "lucide-react";

import { SwitchLang } from "src/components";

const Menu = ({ links }: { links: string[] }) => (
	<div className="grid gap-2 mt-4 lg:hidden">
		<Sheet key="right">
			<SheetTrigger className="cursor-pointer" asChild>
				<MenuIcon color="#292D32" />
			</SheetTrigger>
			<SheetContent
				aria-modal="true"
				className="border-t-[#D8BC40] h-fit w-full pb-10 pt-20 space-y-[30px] lg:hidden"
				side="right"
			>
				<SheetClose asChild>
					<ul className="bg-[#F7F7FD] font-semibold py-4 space-y-5 text-center text-[#3056D3] rounded-2xl">
						{links.map((link, i) => (
							<li
								key={i}
								className="transition ease-in-out duration-300 hover:scale-95 focus:scale-95"
							>
								<a href="#">{link}</a>
							</li>
						))}
					</ul>
				</SheetClose>

				<div className="flex flex-col items-center gap-y-3.5">
					<SwitchLang />
					<SheetClose asChild>
						<button className="bg-[#3171DE] rounded-[42px] font-medium text-white py-[15px] px-9 md:py-[18px] md:px-[25px] md:rounded-[50px]">
							Schedule a Call
						</button>
					</SheetClose>
				</div>
			</SheetContent>
		</Sheet>
	</div>
);

export default Menu;
// Mobile view menu
