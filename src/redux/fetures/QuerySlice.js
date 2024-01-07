import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	search: '',
};

const QuerySlice = createSlice({
	name: 'Query',
	initialState,
	reducers: {
		getSearch: (state, action) => {
			state.search = action.payload;
		},
	},
});
export const { getSearch } = QuerySlice.actions;
export default QuerySlice.reducer;
