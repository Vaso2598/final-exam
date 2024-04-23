import React from "react";
import Image from "next/image";
import Link from "next/link";
import Btn_dark from "../buttons/Btn_dark";

const Header = () => {
	return (
		<header>
			<nav className="py-4 px-28 flex justify-between items-center bg-neutral-50">
				<Link href="/home">
					<Image className="w-32 h-16 -ml-6" src="/logo.svg" width={150} height={150} alt="Final Exam Project Logo" />
				</Link>
				<menu className="text-swamp-900 font-semibold flex items-center gap-4">
					<li className="hover:text-swamp-600">
						<Link href="/home">Home</Link>
					</li>
					<li className="hover:text-swamp-600">Exhibitions</li>
					<li className="hover:text-swamp-600">
						<Link href="/collection"> Collection</Link>
					</li>
					<li className="hover:text-swamp-600">Programs & Events</li>
					<li className="hover:text-swamp-600">Store</li>
					<li>
						<Btn_dark>User</Btn_dark>
					</li>
				</menu>
			</nav>
		</header>
	);
};

export default Header;