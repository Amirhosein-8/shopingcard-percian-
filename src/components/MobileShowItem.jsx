import Item from './Item';
import { motion } from 'framer-motion';

function MobileShowItem({ mobile }) {
	return (
		<motion.div
			className="w-auto p-3 bg-white dark:bg-[#2b3544] h-auto rounded-xl flex justify-center shadow-2xl"
			initial={{ x: '-100vh' }}
			animate={{ x: 0 }}
			transition={{
				duration: 2,
				type: 'spring',
				// staggerChildren: 'before',
				// mass: 1,
				// damping: 5,
				// staggerChildren: 3,
			}}
		>
			<ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  ">
				{mobile?.map((product) => (
					<Item mobile={product} />
				))}
			</ul>
			{/* <Item mobile={mobile}/> */}
		</motion.div>
	);
}

export default MobileShowItem;
