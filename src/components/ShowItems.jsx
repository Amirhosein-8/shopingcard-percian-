import { A11y, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useRef, useState } from 'react';
import Item from './Item';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronRight } from 'react-icons/fa';
import { flexitems } from '../helpers/helper';

function ShowItems({ slicemobile, title }) {
	const nextRef = useRef(null);
	const prevRef = useRef(null);

	return (
		<div className="max-w-[1360px] container p-5 bg-indigo-100 dark:bg-[#343c6f] rounded-2xl space-y-3 my-10">
			<p className="font-extrabold dark:text-gray-200 text-black text-2xl">
				{title}
			</p>
			<span className="inline-block w-full h-0.5 dark:bg-gray-200 bg-black "></span>
			{/* swiper */}
			<div className="relative w-full">
				<Swiper
					modules={[Autoplay, Navigation, A11y]}
					// autoplay={{ delay: 4000 }}
					spaceBetween={50}
					slidesPerView={flexitems()}
					d
					loop={true}
					navigation={{ nextEl: nextRef.current, prevEl: prevRef.current }}
					onSwiper={(swiper) => {
						setTimeout(() => {
							swiper.params.navigation.prevEl = prevRef.current;
							swiper.params.navigation.nextEl = nextRef.current;
							swiper.navigation.destroy();
							swiper.navigation.init();
							swiper.navigation.update();
						});
					}}
				>
					{/* items */}
					<ul className="flex items-center justify-center">
						{slicemobile?.map((mobile) => (
							<SwiperSlide className="flex items-center justify-center">
								<Item key={mobile.random_key} mobile={mobile} />
							</SwiperSlide>
						))}
					</ul>
				</Swiper>
				{/* navigation */}
				<div>
					{/* prev */}
					<div
						ref={prevRef}
						className="absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded-full h-20 w-20 bg-gray-200 
                        opacity-60 hover:opacity-80 hover:scale-110 flex items-center justify-center cursor-pointer"
					>
						<div>
							<FaChevronRight />
						</div>
					</div>
					{/* next */}
					<div
						ref={nextRef}
						className="absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded-full h-20 w-20 bg-gray-200 
            		        opacity-60 hover:opacity-80 rotate-180 hover:scale-110 flex items-center justify-center cursor-pointer"
					>
						<div>
							<FaChevronRight />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ShowItems;
