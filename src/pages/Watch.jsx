import React from 'react';
import { filterwatch } from '../helpers/helper';
import { MAinfilterwatch, valuesectionfilterwatch } from '../helpers/helperwatch';
import AccordionAlwaysOpen from '../components/AccordionAlwaysOpen';
import MobileShowItem from '../components/MobileShowItem';
import { useSelector } from 'react-redux';

export default function Watch() {
	const Products = useSelector((state) => state.SectionItemSLice.items);
	const MAinwatch = filterwatch();

	const watchProducts = Products.length == 0 ? MAinwatch : Products;
	const valueproducts = MAinfilterwatch();


	return (
		<div className="mt-[120px] flex items-center min-h-screen justify-center  md:mt-[148px]  ">
			<div className="flex flex-col sm:flex-row items-center  sm:items-start   w-[1360px] p-5 gap-4 mt-16">
				{/* filter */}
				<div>
					<AccordionAlwaysOpen
						values={valuesectionfilterwatch}
						valueproducts={valueproducts}
						allmobile={MAinwatch}
					/>
				</div>
				{/* show item category  */}
				<div className="w-full">
					<MobileShowItem mobile={watchProducts} />
				</div>
			</div>
		</div>
	);
}
