import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
};

const itemMap = {
	hailo: 'hailo',
	unker: 'unker',
	Xiaomi: 'Xiaomi',
	Gplus: 'Gplus',
	Apple: 'Apple',
	SamSung: 'SamSung',
	nokia: 'nokia',
	lenovo: 'lenovo',
	Asus: 'Asus',
	Apple: 'Apple',
	Surface: 'Surface',
	HP: 'HP',
	_256: '_256',
	_512: '_512',
	ram4: 'ram4',
	ram6: 'ram6',
	ram8: 'ram8',
	ram12: 'ram12',
	ram16: 'ram16',
	ultra: 'ultra',
	hainoteko: 'hainoteko',
	Huawei: 'Huawei',
};

const SectionItemSLice = createSlice({
	name: 'sectionitem',
	initialState,
	reducers: {
		SELECT_ITEM: (state, action) => {
			const selectedItem = itemMap[action.payload[0]];
			console.log(selectedItem);
			state.items = action.payload[1][selectedItem];
		},
		REMOVE_ITEM: (state, action) => {
			state.items = action.payload;
		},
	},
});
export const { SELECT_ITEM, REMOVE_ITEM } = SectionItemSLice.actions;
export default SectionItemSLice.reducer;
