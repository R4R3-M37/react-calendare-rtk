import { createSlice } from '@reduxjs/toolkit'

export interface getDataState {
	months: string[]
	daysInWeek: any
	monthNow: any
	yearNow: any
	numDaysInMonth: number[]
	daysArray: string[]
}

const D = new Date()
const monthNow: number = D.getMonth()
const yearNow: number = D.getFullYear()

const initialState: getDataState = {
	months: [
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
	],
	daysInWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
	monthNow,
	yearNow,
	numDaysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
	daysArray: [],
}

export const getDataInfoSlice = createSlice({
	name: 'getDataInfo',
	initialState,
	reducers: {
		getDays: (state, action) => {
			let numDaysInMonth: any = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
			let daysIndex: any = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 }
			let template = []
			let index: any =
				daysIndex[new Date(action.payload.year, action.payload.month - 1, 1).toString().split(' ')[0]]

			for (let i = 0, l = numDaysInMonth[action.payload.month - 1]; i < l; i++) {
				template.push(i + 1 + '. ' + state.daysInWeek[index++])
				state.daysArray = template
				if (index === 7) index = 0
			}
		},
		setYear: (state, action) => {
			state.yearNow = action.payload
		},
		setMonth: (state, action) => {
			state.monthNow = action.payload
		},
	},
})

export const { getDays, setYear, setMonth } = getDataInfoSlice.actions

export default getDataInfoSlice.reducer
