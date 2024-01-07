import AccordionAlwaysOpen from '../components/AccordionAlwaysOpen';
import { filtermobile } from '../helpers/helper';
import { MAinfiltermobile, valuesectionfilterbobile } from '../helpers/helpermobile';
import MobileShowItem from '../components/MobileShowItem';
import { useSelector } from 'react-redux';

function Mobile() {
	const Products = useSelector((state) => state.SectionItemSLice.items);
	const MAinmobile = filtermobile();

	const MobilProducts = Products.length == 0 ? MAinmobile : Products;
	const valueproducts = MAinfiltermobile();

	return (
		<div className="mt-[120px] flex items-center justify-center  md:mt-[148px]  ">
			<div className="flex flex-col sm:flex-row items-center  sm:items-start min-h-screen  w-[1360px] p-5 gap-4 mt-16">
				{/* filter */}
				<div>
					<AccordionAlwaysOpen
						values={valuesectionfilterbobile}
						valueproducts={valueproducts}
						allmobile={MAinmobile}
					/>
				</div>
				{/* show item category  */}
				<div className="w-full">
					<MobileShowItem mobile={MobilProducts} />
				</div>
			</div>
		</div>
	);
}

export default Mobile;
