import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface IGetWeather {
	date: any
}

export const fetchWeather: any = createAsyncThunk('fetch/ip', async () => {
	const { data } = await axios.get('https://geolocation-db.com/json/')
	const weather = await axios.get(
		`https://api.openweathermap.org/data/2.5/weather?lat=${data.latitude}&lon=${data.longitude}&units=metric&appid=85d545143ca23bb07c2e2f92001db287`
	)
	return weather.data
})

const initialState: IGetWeather = {
	date: null,
}

export const getWeatherInfoSlice = createSlice({
	name: 'getDataInfo',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchWeather.fulfilled]: (state, action) => {
			const D = new Date()
			const months: string[] = [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			]
			const dayNames: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
			state.date = action.payload
			state.date.day = D.getDate()
			state.date.month = months[D.getMonth()]
			state.date.year = D.getFullYear()
			state.date.weekday = dayNames[D.getDay() - 1]
			state.date.timeNow = D.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
		},
	},
})

export default getWeatherInfoSlice.reducer
