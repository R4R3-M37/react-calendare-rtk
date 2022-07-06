import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import range from 'lodash.range'

import { getDays, setMonth, setYear } from './store/slices/getDataInfoSlice'

import './app.scss'

interface InitialDataState {
	year: number
	month: number
}

const App: React.FC = () => {
	const dispatch = useDispatch()
	const { getData } = useSelector((state: any) => state)
	const [data, setData] = useState<InitialDataState>({ year: getData.yearNow, month: getData.monthNow + 1 })
	const [activeDay, setActiveDay] = useState<any>(null)

	const yearsArray = range(getData.yearNow - 5, getData.yearNow + 5)
	const daysInMonth = getData.daysArray.map((num_day: string) => num_day.replace(/[^\d]+/g, '').replace('.', ''))
	const daysInWeeks = getData.daysArray.map((num_day: string, index: number) => num_day.replace(`${index + 1}. `, ''))

	const checkFirstDayInWeek = (day: string) => {
		switch (day) {
			case 'Mon':
				return
			case 'Tue':
				return (
					<>
						<span />
					</>
				)
			case 'Wed':
				return (
					<>
						<span />
						<span />
					</>
				)
			case 'Thu':
				return (
					<>
						<span />
						<span />
						<span />
					</>
				)
			case 'Fri':
				return (
					<>
						<span />
						<span />
						<span />
						<span />
					</>
				)
			case 'Sat':
				return (
					<>
						<span />
						<span />
						<span />
						<span />
						<span />
					</>
				)
			case 'Sun':
				return (
					<>
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
					</>
				)
		}
	}

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
								aria-expanded='false'
							>
								Year
							</button>
							<ul className='dropdown-menu'>
								<li>
									{yearsArray.map((year) => (
										<div
											className='dropdown-item'
											onClick={() => handleChangeYear(year)}
											key={year}
										>
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
								aria-expanded='false'
							>
								Month
							</button>
							<ul className='dropdown-menu'>
								<li>
									{getData.months.map((month: string, index: number) => (
										<div
											className='dropdown-item'
											onClick={() => handleChangeMonth(index)}
											key={month}
										>
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
					{checkFirstDayInWeek(daysInWeeks[0])}
					{daysInMonth.map((day: number) => (
						<span onClick={() => setActiveDay(day)} className={activeDay === day ? 'active' : ''} key={day}>
							{day}
						</span>
					))}
				</div>
				{/*<div className='card'>*/}
				{/*	<div className='card-body'>*/}
				{/*		This is some text within a card body.*/}
				{/*	</div>*/}
				{/*</div>*/}
			</div>
		</div>
	)
}

export default App
