"use client";

import * as React from "react";

import { Button } from "components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "components/ui/dropdown-menu";

export default function DropdownMenuRadioGroupDemo() {
	const [position, setPosition] = React.useState("EN");

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					className="flex gap-2 border-0 !ring-0 !ring-offset-0 !outline-0 overflow-hidden"
				>
					{position}
					<svg
						width="12"
						height="7"
						viewBox="0 0 12 7"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M0.434349 0.646447C0.629612 0.451184 0.946194 0.451184 1.14146 0.646447L5.7879 5.29289L10.4343 0.646447C10.6296 0.451184 10.9462 0.451184 11.1415 0.646447C11.3367 0.841709 11.3367 1.15829 11.1415 1.35355L6.14146 6.35355C5.94619 6.54882 5.62961 6.54882 5.43435 6.35355L0.434349 1.35355C0.239087 1.15829 0.239087 0.841709 0.434349 0.646447Z"
							fill="#424242"
						/>
					</svg>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>{position}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
					<DropdownMenuRadioItem value="EN">English</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="GE">German</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="FR">French</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="ES">Espana</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
// Switch languages.
