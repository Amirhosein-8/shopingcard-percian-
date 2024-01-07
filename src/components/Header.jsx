import { LuSearch } from 'react-icons/lu';
import { MdDarkMode } from 'react-icons/md';
import { IoSunnyOutline } from 'react-icons/io5';
import { RiShoppingCartLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import ResulteSearchCom from './ResulteSearchCom';
import { useDispatch, useSelector } from 'react-redux';
import { getSearch } from '../redux/fetures/QuerySlice';
import { GiHamburgerMenu } from 'react-icons/gi';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CategoryFirst from '../data/CategorydirstData/CategoryFirstData';
import Mobilesidbar from './Mobilesidbar';

function Header({ setIsSlice, IsSlice }) {
	const [Isdark, setIsdark] = useState(false);
	const [isclick, setisclick] = useState(0);
	const [isopensidebar, setisopensidebar] = useState(false);
	const currentitems = useSelector((state) => state.Shop.currentitems);
	const dispatch = useDispatch();

	useEffect(() => {
		const HtmlTag = document.documentElement;
		if (!Isdark) {
			HtmlTag.classList.add('dark');
		} else {
			HtmlTag.classList.remove('dark');
		}
	}, [Isdark]);

	return (
		<>
			<motion.div
				initial={{ display: 'none' }}
				animate={{ display: isopensidebar ? 'flex' : 'none' }}
				className={`w-full h-screen backdrop-blur-sm top-0 fixed z-[60] `}
				onClick={() => setisopensidebar((prev) => !prev)}
			></motion.div>

			{!!isopensidebar && (
				<motion.div
					initial={{ opacity: 0, visibility: 'hidden' }}
					animate={{ opacity: 1, visibility: 'visible' }}
				>
					<Mobilesidbar
						setisopensidebar={setisopensidebar}
						setIsdark={setIsdark}
					/>
				</motion.div>
			)}

			<motion.div
				initial={{ y: '-350vh' }}
				animate={{ y: '0' }}
				transition={{ duration: 2, type: 'spring' }}
				className=" shadow-lg py-4
			    px-8 select-none w-full z-40 fixed top-0 bg-white dark:bg-gray-800"
			>
				{/* logo && search && dark--login*/}
				<div className="flex justify-between items-center w-full">
					{/* logo search  */}
					<div className="flex items-center gap-2  xl:gap-4">
						{/* logo */}
						<motion.p className="text-violet-700 text-2xl italic">
							DIGI AMIR
						</motion.p>
						{/* search */}
						<div className="relative z-40">
							{/* reserch */}
							<motion.div
								onClick={() => setIsSlice((prev) => !prev)}
								className={`w-[250px]  sm:w[350px] 
									md:w-[400px] : xl:w-[768px]
								 transition-transition-width duration-500  z-40 h-12 p-3 gap-2 xl:gap-4 rounded-lg bg-gray-200 dark:bg-gray-600 flex items-center`}
							>
								<div className="text-black dark:text-white">
									<LuSearch size={18} />
								</div>
								<input
									onChange={(event) =>
										dispatch(getSearch(event.target.value))
									}
									className="w-full bg-inherit outline-none placeholder:text-gray-400 text-black dark:text-white"
									type="text"
									placeholder="محصول مورد نظر را جستوجو کنید"
								/>
							</motion.div>
							{/* resultsearch */}
							{IsSlice && (
								<div className="">
									<ResulteSearchCom />
								</div>
							)}
						</div>
					</div>
					{/* dark && login && basket */}
					<div className="md:flex items-center gap-4 hidden ">
						{/* dark */}
						<div className="cursor-pointer">
							<div
								onClick={() => setIsdark((prev) => !prev)}
								className=" hidden dark:flex dark:border-violet-600 dark:border-2 py-2 px-4 rounded-[4px] text-white"
							>
								<MdDarkMode size={20} />
							</div>
							<div
								onClick={() => setIsdark((prev) => !prev)}
								className="dark:hidden text-yellow-500 border border-yellow-500 dark:border-violet-600 dark:border-2 py-2 px-2 lg:px-4 rounded-[4px]"
							>
								<IoSunnyOutline size={20} />
							</div>
						</div>
						{/* login */}
						<div className="cursor-pointer py-2 px-2 lg:px-4 rounded-md border border-violet-600 dark:border-2  flex items-center gap-1 lg:gap-2 text-black dark:text-white">
							<p>ورود</p>
							<p className="bg-gray-400 w-0.5 h-5"></p>
							<p>ثبت نام </p>
						</div>
						{/* basket */}
						<Link
							to="/basketshop"
							className=" cursor-pointer relative flex dark:text-white  rounded-md border-gray-200 border p-1 lg:p-1.5 dark:border-violet-600 dark:border-2"
						>
							<div className="text-gray-700 dark:text-white  ">
								<RiShoppingCartLine size={25} />
							</div>
							<p className="text-xs absolute -right-1 -top-1 w-4 h-4 rounded-full bg-violet-700 flex items-center justify-center">
								{currentitems}
							</p>
						</Link>
					</div>
					{/* icon mobile */}
					<button
						className="dark:text-white text-black md:hidden m-1 text-xl"
						onClick={() => setisopensidebar(true)}
					>
						<GiHamburgerMenu />
					</button>
				</div>

				{/* menu */}
				<div className="mt-10">
					<ul className="hidden md:flex items-center gap-5 text-black dark:text-gray-400 text-xl font-extrabold">
						{CategoryFirst.map((item) => (
							<Link
								onClick={() => setisclick(item.id)}
								key={item.id}
								to={`/${item.path}`}
								className={` ${
									isclick === item.id && 'text-violet-600 '
								}  group relative hover:after:flex after:hidden
								after:absolute after:mt-1 after:w-full  after:h-0.5 after:bg-violet-600 `}
							>
								<div className="flex items-center gap-1">
									<p className="text-xl">{item.icon}</p>
									<p className="">{item.title}</p>
								</div>
							</Link>
						))}
					</ul>
				</div>
			</motion.div>
		</>
	);
}

export default Header;
