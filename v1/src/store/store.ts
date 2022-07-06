import { configureStore } from '@reduxjs/toolkit'

import getDataInfoSlice from './slices/getDataInfoSlice'

export const store = configureStore({
	reducer: {
		getData: getDataInfoSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
