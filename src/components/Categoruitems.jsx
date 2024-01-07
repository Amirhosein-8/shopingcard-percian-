import React from 'react';
import CategoryItemImage from '../data/CategoryItemimage/CategoryItemImage';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Categoruitems() {
	return (
		<ul
			className=" gap-x-4 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-10
			 justify-between items-center  px-2.5 md:px-5 container  mt-10 mb-10  "
		>
			{CategoryItemImage.map((item) => (
				<Link to={`/${item.link}`}>
					<motion.div
						whileHover={{ scale: 1.1 }}
						transition={{duration:1}}
						className="flex flex-col items-center gap-y-5 font-extrabold text-sm xl:text-xl
						text-gray-400 dark:text-white "
					>
						<img
							className="h-28 w-28 lg:h-36 lg:w-36 p-1  border-2 border-pink-600  rounded-full"
							src={item.image}
							alt=""
						/>
						<p>{item.title}</p>
					</motion.div>
				</Link>
			))}
		</ul>
	);
}

export default Categoruitems;
