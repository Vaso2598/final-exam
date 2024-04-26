"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Btn_primary from "@/components/buttons/Btn_primary";
import Btn_secondary from "@/components/buttons/Btn_secondary";
import Btn_invert from "@/components/buttons/Btn_invert";
import checkToken from "@/lib/checkToken";
import {usePathname} from "next/navigation";

const page = () => {
	checkToken();

	const url = usePathname();
	console.log(url);

	return (
		<>
			<section className="flex flex-row justify-between items-center px-28 pt-4 bg-neutral-50 text-swamp-900">
				<div className="w-2/5 flex flex-col gap-4">
					<h1 className="text-5xl text-darkGreen">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
					<p className="text-swamp">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem tenetur consectetur delectus facere
						culpa nihil itaque ipsum explicabo amet eos at obcaecati, quaerat ipsa nisi expedita excepturi. Aliquid,
						assumenda!
					</p>
					<div className="flex gap-6">
						<Btn_primary>Buy Tickets</Btn_primary>
						<Btn_secondary>Learn More</Btn_secondary>
					</div>
				</div>
				<Image
					className="w-2/5 border-2 p-2 rounded-t-full"
					src="/placeholder/2411.png"
					width={476}
					height={660}
					alt="image"
				/>
			</section>
			<section className="px-48 py-24 flex flex-col gap-16 bg-swamp-700 text-neutral-50">
				<div className="flex gap-28">
					<Image className="" src="/placeholder/hqdefault.jpg" width={534} height={354} alt="image" />
					<div className="flex flex-col gap-4">
						<h2 className="text-4xl">Discover Old and New Art</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia corporis repellat fuga nostrum perspiciatis
							aspernatur suscipit mollitia deserunt hic impedit autem quam consequuntur cumque, ducimus obcaecati,
							magnam molestiae sequi recusandae!
						</p>
						<Btn_invert>
							<Link href="/collection">Learn More</Link>
						</Btn_invert>
					</div>
				</div>
			</section>
			<section className="px-24 pb-4 bg-neutral-50">
				<h2 className="text-lg">News & Updates</h2>
				<Link href="/">View All Posts</Link>
				<div className="flex">
					<div>
						<Image className="" src="/placeholder/hqdefault.jpg" width={520} height={333} alt="image" />
						<h3 className="text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
						<p className="text-sm">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam vel veritatis illum recusandae
							sapiente perspiciatis odit quod deleniti exercitationem. Quas nihil modi vel rerum tenetur. Amet mollitia
							accusantium laborum!
						</p>
						<p>
							<i>date dd-mm-yyyy</i>
						</p>
					</div>
					<div>
						<Image className="" src="/placeholder/hqdefault.jpg" width={236} height={151} alt="image" />
						<h3 className="text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
						<p className="text-sm">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam vel veritatis illum recusandae
							sapiente perspiciatis odit quod deleniti exercitationem. Quas nihil modi vel rerum tenetur. Amet mollitia
							accusantium laborum!
						</p>
						<p>
							<i>date dd-mm-yyyy</i>
						</p>
						<Image className="" src="/placeholder/hqdefault.jpg" width={236} height={151} alt="image" />
						<h3 className="text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
						<p className="text-sm">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam vel veritatis illum recusandae
							sapiente perspiciatis odit quod deleniti exercitationem. Quas nihil modi vel rerum tenetur. Amet mollitia
							accusantium laborum!
						</p>
						<p>
							<i>date dd-mm-yyyy</i>
						</p>
						<Image className="" src="/placeholder/hqdefault.jpg" width={236} height={151} alt="image" />
						<h3 className="text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
						<p className="text-sm">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam vel veritatis illum recusandae
							sapiente perspiciatis odit quod deleniti exercitationem. Quas nihil modi vel rerum tenetur. Amet mollitia
							accusantium laborum!
						</p>
						<p>
							<i>date dd-mm-yyyy</i>
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default page;
