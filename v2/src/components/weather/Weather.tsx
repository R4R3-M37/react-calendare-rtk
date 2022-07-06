import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchWeather } from '../../store/slices/getWeatherSlice'

import './weather.scss'

import SkeletonWeather from './SkeletonWeather'

const Weather: React.FC = () => {
	const dispatch = useDispatch()
	const { date } = useSelector((state: any) => state.getWeather)
	const [time, setTime] = useState(new Date().toLocaleTimeString())

	useEffect(() => {
		dispatch(fetchWeather())
	}, [])

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date().toLocaleTimeString())
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	if (!date) {
		return <SkeletonWeather />
	}

	return (
		<div className='card'>
			<div className='card-weather'>
				<div className='card-weather__info'>
					<p className='card-weather__info__place'>
						{date.name}
						<br />
						{date.weather[0].description}
					</p>
					<p className='card-weather__info__time'>{time}</p>
					<p className='card-weather__info__date'>
						{date.month} {date.day} {date.year} | {date.weekday}
					</p>
				</div>
				<div className='card-weather__weather'>
					<img
						className='card-weather__weather__icon'
						src={`https://openweathermap.org/img/w/${date.weather[0].icon}.png`}
						alt=''
					/>
					<p className='card-weather__weather__temp'>
						<span>{parseInt(date.main.temp)}°</span>
						<span>C</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Weather
