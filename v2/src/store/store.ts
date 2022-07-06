import { configureStore } from '@reduxjs/toolkit'

import getDataInfoSlice from './slices/getDataInfoSlice'
import getWeatherInfoSlice from './slices/getWeatherSlice'

export const store = configureStore({
	reducer: {
		getData: getDataInfoSlice,
		getWeather: getWeatherInfoSlice,
	},
})
