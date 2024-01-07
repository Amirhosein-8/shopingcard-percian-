import { IoMdClose } from 'react-icons/io';
import CategoryFirst from '../data/CategorydirstData/CategoryFirstData';
import { Link } from 'react-router-dom';
import { MdDarkMode } from 'react-icons/md';
import { IoSunnyOutline } from 'react-icons/io5';
import { RiShoppingCartLine } from 'react-icons/ri';

function Mobilesidbar({ setisopensidebar, setIsdark }) {
	return (
		<div
			className="h-screen w-56 sm:w-64 bg-gray-700 dark:bg-gray-900
         fixed z-[70] top-0 left-0 bottom-0 p-3 space-y-5 "
		>
			{/* header sidebar  */}
			<div
				className="text-xl text-black dark:text-white"
				onClick={() => setisopensidebar(false)}
			>
				<IoMdClose />
			</div>
			{/* body sidbar  */}
			<ul className="flex flex-col   gap-y-5 ">
				{CategoryFirst.map((item) => (
					<Link
						onClick={() => setisopensidebar(false)}
						to={`/${item.path}`}
						className=" flex   gap-x-2 text-xl text-black dark:text-gray-200"
						key={item.id}
					>
						<span>{item.icon}</span>
						<span>{item.title}</span>
					</Link>
				))}
			</ul>
			{/* dark && login && basket */}
			<div className="flex flex-col items-start gap-4  ">
				{/* dark */}
				<div
					className="cursor-pointer"
					onClick={() => {
						setIsdark((prev) => !prev);
					}}
				>
					<div
						className=" hidden dark:flex dark:border-violet-600 
                        dark:border-2 py-2 px-4 rounded-[4px] text-white"
					>
						<MdDarkMode size={20} />
					</div>
					<div
						className="dark:hidden text-yellow-500 border
                         border-yellow-500 dark:border-violet-600 dark:border-2
                          py-2 px-2 lg:px-4 rounded-[4px]"
					>
						<IoSunnyOutline size={20} />
					</div>
				</div>
				{/* login */}
				<div
					className="cursor-pointer py-2 px-2 lg:px-4 
                rounded-md border border-violet-600 dark:border-2
                 flex items-center gap-1 lg:gap-2 text-black dark:text-white"
				>
					<p>ورود</p>
					<p className="bg-gray-400 w-0.5 h-5"></p>
					<p>ثبت نام </p>
				</div>
				{/* basket */}
				<Link
					onClick={() => setisopensidebar(false)}
					to="/basketshop"
					className=" cursor-pointer relative flex dark:text-white  rounded-md border-gray-200 border p-1 lg:p-1.5 dark:border-violet-600 dark:border-2"
				>
					<div className="text-gray-700 dark:text-white  ">
						<RiShoppingCartLine size={25} />
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Mobilesidbar;
