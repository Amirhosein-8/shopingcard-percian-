import { MdFilterAltOff } from 'react-icons/md';
import { FaChevronUp } from 'react-icons/fa';

import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch } from 'react-redux';

import { SELECT_ITEM, REMOVE_ITEM } from '../redux/fetures/sectionItem/SectionItemSlice';
import { useState } from 'react';

const AccordionAlwaysOpen = ({ values, valueproducts, allmobile }) => {
	const dispatch = useDispatch();
	const [active, setActive] = useState(1);
	const [clearfilter, setClearfilter] = useState(false);

	return (
		<motion.div
			className=" min-h-[200px] w-[281px]  bg-white dark:bg-gray-700 rounded-xl p-2"
			initial={{ x: '100vh' }}
			animate={{ x: 0 }}
			transition={{ duration: 3, type: 'spring' }}
		>
			{/* headderfilter */}
			<div className="flex items-center justify-between m-2">
				<p className="text-gray-400 font-bold">فیلتر ها </p>
				<motion.div
					animate={{ backgroundColor: clearfilter ? '#ef4444' : '#868a91' }}
					onClick={() => {
						dispatch(REMOVE_ITEM(allmobile));
						setClearfilter(false);
					}}
					className="flex items-center justify-between gap-x-1 p-2
					  rounded-2xl text-white cursor-pointer"
				>
					<p className="text-white">حذف فیلتر</p>
					<MdFilterAltOff color="white" />
				</motion.div>
			</div>
			<ul className="space-y-3 p-4 font-bold text-black dark:text-gray-300">
				{values.map((item, index) => (
					<li key={index} className="rounded-lg bg-gray-200 dark:bg-gray-600">
						<button
							className="flex flex-row justify-between  items-center border-gray-400 w-full text-left p-2 "
							onClick={() => setActive(item.id)}
						>
							<motion.p
								animate={{
									color: item.id === active ? '#a78bfa' : '',
								}}
							>
								{item.title}
							</motion.p>
							<motion.div
								animate={{
									rotate: item.id === active ? 180 : 0,
									color: item.id === active ? '#a78bfa' : '',
								}}
								transition={{
									type: 'spring',
									ease: 'easeInOut',
								}}
							>
								<FaChevronUp />
							</motion.div>
						</button>
						<motion.div
							className={`overflow-hidden mt-2`}
							animate={{
								height: active === item.id ? 'auto' : 0,
							}}
						>
							<ul className="flex justify-center items-start flex-col">
								{item.value.map((p, index) => (
									<div
										onClick={() => {
											const arreypayload = [p, valueproducts];
											dispatch(SELECT_ITEM(arreypayload));
											setClearfilter(true);
										}}
										key={index}
										className="flex gap-2 items-center my-2 "
									>
										<input
											value={p}
											type="radio"
											id={p}
											className="block cursor-pointer"
											name={'amir'}
										/>
										<label className="cursor-pointer" htmlFor={p}>
											{' '}
											{p}
										</label>
									</div>
								))}
							</ul>
						</motion.div>
					</li>
				))}
			</ul>
		</motion.div>
	);
};

export default AccordionAlwaysOpen;
