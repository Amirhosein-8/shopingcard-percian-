import React from 'react';
import {
	sectio4,
	section1,
	section2,
	section3,
	section5,
	section6,
} from '../data/Footer/footer';

function Footer() {
	return (
		<div className=" dark:bg-[#111827] bg-[#1e293b] p-5 mt-20">
			{/* help */}
			<div className="md:flex items-start  justify-center hidden  gap-x-5 text-white">
				<ul className="space-y-2">
					{section1.map((item) => (
						<li>
							<p>{item}</p>
						</li>
					))}
				</ul>
				<ul className="space-y-2">
					{section2.map((item) => (
						<li>
							<p>{item}</p>
						</li>
					))}
				</ul>
				<ul className="space-y-2">
					{section3.map((item) => (
						<li>
							<p>{item}</p>
						</li>
					))}
				</ul>
				<ul className="space-y-2">
					{sectio4.map((item) => (
						<li>
							<p>{item}</p>
						</li>
					))}
				</ul>
				<ul className="space-y-2">
					{section5.map((item) => (
						<li>
							<p>{item}</p>
						</li>
					))}
				</ul>
				<ul className="space-y-2">
					{section6.map((item) => (
						<li>
							<p>{item}</p>
						</li>
					))}
				</ul>
			</div>
			{/* call we */}
			<div className="flex items-center justify-center gap-x-4 ">
				<img
					className="h-[128px] w-[112px]  bg-white p-5 "
					src="/images/footer/1.svg"
					alt=""
				/>
				<img
					className="h-[128px] w-[112px] bg-white p-5 "
					src="/images/footer/2.webp"
					alt=""
				/>
				<img
					className="h-[128px] w-[112px] bg-white p-5 "
					src="/images/footer/3.webp"
					alt=""
				/>
			</div>
		</div>
	);
}

export default Footer;
