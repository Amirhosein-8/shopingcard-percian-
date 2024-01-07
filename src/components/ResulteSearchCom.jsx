import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdata } from '../redux/fetures/Fetch/FetchSlice';
import slicetitle from '../helpers/helper';

function ResulteSearchCom() {
	const [FilTerproducts, setFilTerproducts] = useState([]);
	const diapatch = useDispatch();
	const Products = useSelector((state) => state.Products.data.result);
	const search = useSelector((state) => state.SearchQuery.search);

	useEffect(() => {
		const filterproducts = search
			? Products?.filter((product) => product.name1.includes(search))
			: '';
		setFilTerproducts(filterproducts);
	}, [search]);
	console.log(search);

	useEffect(() => {
		diapatch(fetchdata());
	}, []);

	return (
		<>
			{search ? (
				<div className="w-full  rounded-lg mt-2 absolute bg-white shadow-lg dark:bg-gray-700 p-2 space-y-5">
					<p className="text-black dark:text-white">جسنو جو برای {search}</p>
					{/* results */}
					{FilTerproducts?.length ? (
						<div>
							<ul className="h-56  overscroll-y-contain overflow-y-scroll p-2 flex flex-col gap-y-2  ">
								{FilTerproducts?.map((product) => (
									<li className="flex items-center justify-between">
										<img
											className="w-24 h-24"
											src={product.image_url}
											alt=""
										/>
										<p className="text-black dark:text-white">
											{slicetitle(product.name1)}
										</p>
									</li>
								))}
							</ul>
						</div>
					) : (
						''
					)}
				</div>
			) : (
				''
			)}
		</>
	);
}

export default ResulteSearchCom;
