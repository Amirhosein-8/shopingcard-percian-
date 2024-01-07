import React from 'react';
import { filterlaptop } from '../helpers/helper';
import { MAinfilterlaptop, valuesectionfilterlaptop } from '../helpers/helperlaptop';
import { useSelector } from 'react-redux';
import AccordionAlwaysOpen from '../components/AccordionAlwaysOpen';
import MobileShowItem from '../components/MobileShowItem';

function LapTop() {
	const Products = useSelector((state) => state.SectionItemSLice.items);
	const Mainlaptop = filterlaptop();

	const laptopProducts = Products?.length == 0 ? Mainlaptop : Products;
	const valueproducts = MAinfilterlaptop();
	const alllaptop = filterlaptop();
	return (
		<div className="mt-[120px] flex items-center min-h-screen justify-center  md:mt-[148px]  ">
			<div className="flex flex-col items-center sm:flex-row   sm:items-start   w-[1360px] p-5 gap-4 mt-16 ">
				{/* filter */}
				<div>
					<AccordionAlwaysOpen
						values={valuesectionfilterlaptop}
						valueproducts={valueproducts}
						allmobile={alllaptop}
					/>
				</div>
				{/* show item category  */}
				<div className="w-full">
					<MobileShowItem mobile={laptopProducts} />
				</div>
			</div>
		</div>
	);
}

export default LapTop;
