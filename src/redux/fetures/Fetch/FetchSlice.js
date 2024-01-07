import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../../services/Servvices';

const initialState = {
	loading: false,
	data: [],
	error: '',
};

const fetchdata = createAsyncThunk('Products/createAsyncThunk', () => {
	return api.get('');
});

const FetchSlice = createSlice({
	name: 'Products',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchdata.pending, (state) => {
			state.loading = true;
		});

		builder.addCase(fetchdata.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.error = '';
		});
		builder.addCase(fetchdata.rejected, (state, action) => {
			state.loading = false;
			state.data = [];
			state.error = action.error.message;
		});
	},
});
export default FetchSlice.reducer;
export { fetchdata };
