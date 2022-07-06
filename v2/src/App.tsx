import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getDays, setMonth, setYear } from './store/slices/getDataInfoSlice'

import Content from './components/Content'
import Weather from './components/weather/Weather'

import './app.scss'

interface InitialDataState {
	year: number
	month: number
}

const App: React.FC = () => {
	const D = new Date()
	const dispatch = useDispatch()
	const { getData } = useSelector((state: any) => state)
	const [data, setData] = useState<InitialDataState>({ year: getData.yearNow, month: getData.monthNow + 1 })

	const handleChangeYear = (year: number) => {
		setData((prevState) => ({ ...prevState, year, month: prevState.month }))
		dispatch(setYear(year))
	}

	const handleChangeMonth = (month: number) => {
		setData((prevState) => ({ ...prevState, year: prevState.year, month: month + 1 }))
		dispatch(setMonth(month))
	}

	useEffect(() => {
		dispatch(getDays(data))
	}, [data])

	return (
		<div className='container'>
			<div className='calendar'>
				<div className='header'>
					<div className='input-group justify-content-around align-items-center'>
						<div>
							<button
								className='btn btn-outline-secondary dropdown-toggle'
								type='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								Year
							</button>
							<ul className='dropdown-menu'>
								<li>
									{getData.yearsArray.map((year: number) => (
										<div
											className={
												D.getFullYear() === year ? 'dropdown-item active' : 'dropdown-item'
											}
											onClick={() => handleChangeYear(year)}
											key={year}>
											{year}
										</div>
									))}
								</li>
							</ul>
						</div>
						<div>
							<span className='form-control'>
								{getData.yearNow} {getData.months[getData.monthNow]}
							</span>
						</div>
						<div>
							<button
								className='btn btn-outline-secondary dropdown-toggle'
								type='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								Month
							</button>
							<ul className='dropdown-menu'>
								<li>
									{getData.months.map((month: string, index: number) => (
										<div
											className={
												D.getMonth() === index ? 'dropdown-item active' : 'dropdown-item'
											}
											onClick={() => handleChangeMonth(index)}
											key={month}>
											{month}
										</div>
									))}
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='days-header'>
					{getData.daysInWeek.map((day: string) => (
						<span key={day}>{day}</span>
					))}
				</div>
				<div className='days'>
					<Content day={getData.firstDayInWeek[0]} />
					{getData.daysInMonth.map((day: number) => (
						<span
							className={D.getDate() == day && getData.monthNow == D.getMonth() ? 'active' : ''}
							key={day}>
							{day}
						</span>
					))}
				</div>
				<Weather />
			</div>
		</div>
	)
}

export default App
