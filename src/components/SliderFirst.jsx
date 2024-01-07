import { Swiper, SwiperSlide } from 'swiper/react';
import SliderFirstData from '../data/SliderFirstData/SliderFirstData';
import { A11y, Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import { FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef } from 'react';

function SliderFirst() {
	const nextRef = useRef(null);
	const prevRef = useRef(null);

	return (
		<div className="relative w-full">
			<Swiper
				modules={[Autoplay, Navigation, A11y]}
				autoplay={{ delay: 4000 }}
				spaceBetween={50}
				slidesPerView={1}
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
				{SliderFirstData.map(({ image }, index) => (
					<SwiperSlide key={index} className="w-full">
						<img className="w-full" src={image} alt="" />
					</SwiperSlide>
				))}
			</Swiper>
			{/* navigation */}
			<div className="">
				{/* prev */}
				<div
					ref={prevRef}
					className="absolute left-0 top-0 z-20
            		rounded-r-full h-full w-20 bg-gray-200 
            		opacity-60 hover:opacity-80 hover:scale-x-110  
            		items-center justify-center cursor-pointer hidden sm:flex "
				>
					<div className="rotate-180">
						<FaChevronRight size={20} />
					</div>
				</div>
				{/* next */}
				<div
					className="absolute right-0 top-0 z-20 rounded-l-full h-full w-20 bg-gray-200 
            		opacity-60 hover:opacity-80 hover:scale-x-110 hidden sm:flex items-center justify-center cursor-pointer"
					ref={nextRef}
				>
					<div>
						<FaChevronRight size={20} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default SliderFirst;
