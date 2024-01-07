import { configureStore } from '@reduxjs/toolkit';
import FetchSlice from '../fetures/Fetch/FetchSlice';
import logger from 'redux-logger';
import QuerySlice from '../fetures/QuerySlice';
import ShopSlice from '../fetures/Shop/ShopSlice';
import SectionItemSlice from '../fetures/sectionItem/SectionItemSlice';

const Stor = configureStore({
	reducer: {
		Products: FetchSlice,
		SearchQuery: QuerySlice,
		Shop: ShopSlice,
		SectionItemSLice: SectionItemSlice,
	},
	middleware: (middlewaredefuulte) => middlewaredefuulte().concat(logger),
});

export default Stor;
