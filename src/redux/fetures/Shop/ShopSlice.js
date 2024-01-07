import { createSlice } from '@reduxjs/toolkit';
import { updaitecourenitems, updaitetotal } from '../../../helpers/helper';

const initialState = {
	selectitems: [],
	currentitems: 0,
	totall: 0,
};

const ShopSlice = createSlice({
	name: 'Shop',
	initialState,
	reducers: {
		ADD_ITEM: (state, action) => {
			const statusitems = state.selectitems.find(
				(item) => item.random_key === action.payload.random_key,
			);

			if (!statusitems) {
				state.selectitems.push({
					...action.payload,
					quantity: 1,
				});
				state.totall = updaitetotal(state.selectitems);
				state.currentitems = updaitecourenitems(state.selectitems);
			}
		},

		REMOVE_ITEM: (state, action) => {
			const removeproducts = state.selectitems?.filter(
				(Product) => Product.random_key !== action.payload.random_key,
			);

			state.selectitems = removeproducts;
			state.totall = updaitetotal(removeproducts);
			state.currentitems = updaitecourenitems(removeproducts);
		},

		INCREAS_ITEM: (state, action) => {
			const findindexproducts = state.selectitems.findIndex(
				(product) => product.random_key === action.payload.random_key,
			);

			state.selectitems[findindexproducts].quantity++;
			state.totall = updaitetotal(state.selectitems);
			state.currentitems = updaitecourenitems(state.selectitems);
		},

		DICREAS_ITEM: (state, action) => {
			const findindexproducts = state.selectitems.findIndex(
				(product) => product.random_key === action.payload.random_key,
			);

			state.selectitems[findindexproducts].quantity--;
			state.totall = updaitetotal(state.selectitems);
			state.currentitems = updaitecourenitems(state.selectitems);
		},
	},
});

export default ShopSlice.reducer;
export const { ADD_ITEM, REMOVE_ITEM, INCREAS_ITEM, DICREAS_ITEM } = ShopSlice.actions;
