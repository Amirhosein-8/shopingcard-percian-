import { IoDiamondOutline } from 'react-icons/io5';
import { SiTruenas } from 'react-icons/si';
import { SiFastapi } from 'react-icons/si';
import { VscChromeClose } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import slicetitle from '../helpers/helper';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import {
	REMOVE_ITEM,
	INCREAS_ITEM,
	DICREAS_ITEM,
} from '../redux/fetures/Shop/ShopSlice';
import { Link } from 'react-router-dom';

function Basketshop() {
	const Productsshop = useSelector((state) => state.Shop);
	const selectitems = Productsshop.selectitems;
	const totla = Productsshop.totall.toLocaleString();

	const dispatch = useDispatch();

	return (
		<div className=" pt-2  min-h-screen mt-[120px] md:mt-[148px] flex items-center justify-center">
			{selectitems.length ? (
				<div className=" items-center md:items-start flex flex-col-reverse md:flex-row justify-center gap-5">
					{/* /ditail--products */}
					<div className="space-y-5">
						{selectitems?.map((product) => (
							<div
								key={product.random_key}
								className="min-h-[128px] w-auto bg-white shadow-md shadow-slate-600 dark:bg-gray-700 flex
                                    items-center justify-between  p-2 dark:text-[#d2d2d8] text-[#000018] rounded-md"
							>
								<div className="flex items-center gap-x-5">
									{/* icon--delete */}
									<button
										onClick={() => dispatch(REMOVE_ITEM(product))}
									>
										<VscChromeClose size={20} />
									</button>
									{/* ditail */}
									<div className="flex items-center gap-x-8 h-full">
										<div className="">
											<img
												className="w-[112px] h-[112px] bg-red-600"
												src={product.image_url}
												alt=""
											/>
										</div>
										<div className="flex flex-col gap-y-4 items-start justify-between h-full">
											<p>{slicetitle(product.name1)}</p>
											<p className="flex items-center gap-x-2">
												<span>
													{product.price.toLocaleString()}
												</span>
												<span>تومان</span>
											</p>
											{/* buttens */}
											<div className="flex items-center gap-3 p-2 rounded-md bg-white dark:bg-gray-800">
												<button
													className=" p-1  bg-gray-900 rounded-full"
													onClick={() =>
														dispatch(INCREAS_ITEM(product))
													}
												>
													<FaPlus />
												</button>
												<p className="">{product.quantity}</p>
												{product.quantity == 1 && (
													<button
														className=" p-1 bg-gray-900 rounded-full"
														onClick={() =>
															dispatch(REMOVE_ITEM(product))
														}
													>
														<MdDelete />
													</button>
												)}
												{product.quantity > 1 && (
													<button
														className=" p-1 bg-gray-900 rounded-full"
														onClick={() =>
															dispatch(
																DICREAS_ITEM(product),
															)
														}
													>
														<FaMinus />
													</button>
												)}
											</div>
										</div>
									</div>
								</div>
								{/* vixl */}
								<div className="flex flex-col gap-y-3">
									<p className="flex items-center gap-x-2 ">
										<span className="text-blue-500">
											<IoDiamondOutline />
										</span>
										<span>ضمانت هفت روزه کالا</span>
									</p>
									<p className="flex items-center  gap-x-2">
										<span className="text-yellow-500">
											<SiTruenas />
										</span>
										<span>18 ماه گارانتی</span>
									</p>
									<p className="flex items-center  gap-x-2">
										<span className="text-green-500">
											<SiFastapi />
										</span>
										<span>ارسال سریع</span>
									</p>
								</div>
							</div>
						))}
					</div>
					{/* total */}
					<div
						className="w-  bg-white shadow-md shadow-slate-600 w-auto
                        dark:bg-gray-700 2 dark:text-[#d2d2d8] text-[#000018] rounded-md py-7 px-4
                        space-y-4"
                        
					>
						<p>
							<span>قیمت کالا ها : </span>
							<span> {totla}تومان</span>
						</p>
						<button className="w-[90%]  bg-violet-700 py-2 px-1 rounded-xl">
							به خرید ادامه بده
						</button>
					</div>
				</div>
			) : (
				<div className="flex items-center justify-center flex-col gap-y-7">
					<img className="h-56 w-56" src="/images/no products/1.png" alt="" />
					<p className="text-black dark:text-gray-300 text-xl ">سبد شما خالی است :(</p>
					<Link to='/home' className="w-full bg-violet-600 py-2 flex items-center justify-center  rounded-full text-gray-300  ">
						برو به صفحه اصلی
					</Link>
				</div>
			)}
		</div>
	);
}

export default Basketshop;
