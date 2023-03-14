import { configureStore, createSlice } from '@reduxjs/toolkit';

export const paginationSlice = createSlice({
	name: 'pagination',
	initialState: {
		currentPage: 1,
		totalCount: 0,
	},
	reducers: {
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload;
		},
		setTotalCount: (state, action) => {
			state.totalCount = action.payload;
		},
	},
});

export const { setCurrentPage, setTotalCount } = paginationSlice.actions;

export default configureStore({
	reducer: {
		pagination: paginationSlice.reducer,
	},
});
