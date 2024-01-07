
import AccordionAlwaysOpen from '../components/AccordionAlwaysOpen';
import MobileShowItem from '../components/MobileShowItem';
import { filtertablet } from '../helpers/helper';
import { MAinfiltertablat, valuesectionfiltertablet } from '../helpers/helpertablat';
import { useSelector } from 'react-redux';

function Tablet() {

	const Products = useSelector((state) => state.SectionItemSLice.items);
	const MAintablet = filtertablet();

	const tabletProducts = Products?.length == 0 ? MAintablet : Products;
	const valueproducts = MAinfiltertablat();
	const alltablet = filtertablet();

	return (
		<div className="mt-[120px] flex min-h-screen items-center justify-center  md:mt-[148px]  ">
			<div className="flex flex-col sm:flex-row items-center  sm:items-start  w-[1360px] p-5 gap-4 mt-16">
				{/* filter */}
				<div>
					<AccordionAlwaysOpen
						values={valuesectionfiltertablet}
						valueproducts={valueproducts}
						allmobile={alltablet}
					/>
				</div>
				{/* show item category  */}
				<div className="w-full">
					<MobileShowItem mobile={tabletProducts} />
				</div>
			</div>
		</div>
	);
}

export default Tablet;
