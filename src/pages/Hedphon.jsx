import React from 'react';
import { filterhedphon } from '../helpers/helper';
import { MAinfilterhedphon, valuesectionfilterhedphon } from '../helpers/helperhedphon';
import AccordionAlwaysOpen from '../components/AccordionAlwaysOpen';
import MobileShowItem from '../components/MobileShowItem';
import { useSelector } from 'react-redux';

function Hedphon() {
	const Products = useSelector((state) => state.SectionItemSLice.items);
	const MAihedphon = filterhedphon();

	const hedphonProducts = Products.length == 0 ? MAihedphon : Products;
	const valueproducts = MAinfilterhedphon();

	return (
		<div className="mt-[120px] flex items-center min-h-screen justify-center  md:mt-[148px]  ">
			<div className="flex flex-col sm:flex-row items-center  sm:items-start  w-[1360px] p-5 gap-4 mt-16">
				{/* filter */}
				<div>
					<AccordionAlwaysOpen
						values={valuesectionfilterhedphon}
						valueproducts={valueproducts}
						allmobile={MAihedphon}
					/>
				</div>
				{/* show item category  */}
				<div className="w-full">
					<MobileShowItem mobile={hedphonProducts} />
				</div>
			</div>
		</div>
	);
}

export default Hedphon;
