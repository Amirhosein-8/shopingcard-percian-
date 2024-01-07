import React, { useEffect, useRef } from 'react';
import slicetitle, { FindQuntity } from '../helpers/helper';
import { TbShoppingBagPlus } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ITEM, DICREAS_ITEM, INCREAS_ITEM } from '../redux/fetures/Shop/ShopSlice';
import { CiBookmark } from 'react-icons/ci';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { REMOVE_ITEM } from '../redux/fetures/Shop/ShopSlice';
import { motion } from 'framer-motion';

function Item({ mobile }) {
	const dispatch = useDispatch();
	const ShopProducts = useSelector((state) => state.Shop.selectitems);
	const RefMark = useRef(null);
	const { image_url, price, name1 } = mobile;

	const quantity = FindQuntity(ShopProducts, mobile);

	return (
		<motion.div
			className="min-h-[17.5rem] min-w-[11rem] sm:w-[12.5rem] mt-10
         	bg-white dark:bg-gray-800 text-black dark:text-gray-200  rounded-xl flex flex-col items-center relative"
			initial={{
				opacity: 0,

				x: 10 % 2 === 0 ? 50 : -50,
			}}
			whileInView={{
				opacity: 1,
				x: 0,
				transition: {
					duration: 1,
				},
			}}
			viewport={{ once: true }}
		>
			<img
				className="border-4 shadow-lg dark:border-violet-600 p-0.5 bg-white dark:bg-gray-700 h-40 w-40 sm:w-44 sm:h-44 rounded-xl absolute -top-10"
				src={image_url}
				alt=""
			/>
			{/* ditail */}
			<div className="flex flex-col items-center gap-y-3">
				{/* tittle */}
				<p className="mt-40 font-semibold">{slicetitle(name1)}</p>
				{/* add to card */}
				<div className="flex flex-col items-center gap-y-2">
					{/* add */}
					{!!quantity == 0 && (
						<button
							onClick={() => {
								dispatch(ADD_ITEM(mobile));
								RefMark.current?.classList.toggle('text-red-500');
							}}
							className="flex items-center bg-gray-800 gap-2 dark:border-2 
                      		border-violet-600 p-1 rounded-md text-white dark:text-gray-200 active:scale-90 transition-all"
						>
							<div className="text-2xl">
								<TbShoppingBagPlus />
							</div>

							<p className="font-semibold ">افزودن به سبد خرید</p>
						</button>
					)}
					{/* in card */}
					<div className="flex items-center  gap-x-1">
						{/* pluse */}
						{!!quantity >= 1 && (
							<div
								onClick={() => dispatch(INCREAS_ITEM(mobile))}
								className="bg-gray-800 p-1 rounded-full text-white cursor-pointer"
							>
								<FaPlus />
							</div>
						)}
						{/* add card */}
						{!!quantity >= 1 && (
							<button className=" flex items-center bg-violet-600 text-white rounded-md p-1 gap-x-2  ">
								<div ref={RefMark} className="rotate-[14deg] hidden sm:flex">
									<CiBookmark />
								</div>
								<p className="flex items-center gap-x-2">
									<span>در سبد خرید</span>
									<span>{quantity}</span>
								</p>
							</button>
						)}
						{/* delete */}
						{quantity == 1 ? (
							<div
								onClick={() => dispatch(REMOVE_ITEM(mobile))}
								className="bg-gray-800  p-1 rounded-full text-white text-xl cursor-pointer"
							>
								<MdDelete />
							</div>
						) : (
							''
						)}
						{/* /mines */}
						{quantity > 1 && (
							<div
								onClick={() => dispatch(DICREAS_ITEM(mobile))}
								className="bg-gray-800 p-1 rounded-full text-white text-xl cursor-pointer"
							>
								<FaMinus />
							</div>
						)}
					</div>
				</div>
				{/* price */}
				<p className="font-semibold">{price.toLocaleString()} تومان</p>
			</div>
		</motion.div>
	);
}

export default Item;
