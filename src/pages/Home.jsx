import React from 'react';
import SliderFirst from '../components/SliderFirst';
import Categoruitems from '../components/Categoruitems';
import ShowItems from '../components/ShowItems';

import { filterlaptop, filtermobile, filtertablet } from '../helpers/helper';

function Home() {
	const slicemobile = filtermobile()?.slice(0, 10);
	const slicelaptop = filterlaptop()?.slice(0, 10);
	const slicetablet = filtertablet()?.slice(0, 10);

	return (
		<div className="mt-[120px] min-h-screen  md:mt-[148px] py-5 flex flex-col">
			{/* SliderFirst */}
			<div className="overflow-hidden">
				<SliderFirst />
			</div>
			{/* Category Items */}
			<div className="flex items-center justify-center">
				<Categoruitems />
			</div>
			{/* items--mobile */}
			<div>
				<ShowItems slicemobile={slicemobile} title={'موبایل'} />
			</div>
			{/* images betwen */}
			<div className="flex w-full items-center gap-x-2 px-2 ">
				<img
					className="h-48 rounded-xl  w-1/2"
					src="/images/betvinproducts/1.webp"
					alt=""
				/>

				<img
					className="h-48 rounded-xl w-1/2"
					src="/images/betvinproducts/2.webp"
					alt=""
				/>
			</div>
			{/* items--laptop */}
			<div>
				<ShowItems slicemobile={slicelaptop} title={'لپ تاپ'} />
			</div>
			{/* items--tablet */}
			<div>
				<ShowItems slicemobile={slicetablet} title={'تبلت'} />
			</div>
		</div>
	);
}

export default Home;
