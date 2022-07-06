import React from 'react'
import ContentLoader from 'react-content-loader'

const SkeletonWeather = () => (
	<ContentLoader
		speed={2}
		width={332}
		height={180}
		viewBox='0 0 332 180'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'>
		<rect x='20' y='20' rx='5' ry='5' width='100' height='15' />
		<rect x='20' y='40' rx='5' ry='5' width='140' height='15' />
		<rect x='20' y='79' rx='10' ry='10' width='150' height='30' />
		<rect x='250' y='60' rx='10' ry='10' width='70' height='40' />
		<rect x='20' y='130' rx='11' ry='11' width='70' height='20' />
		<rect x='100' y='129' rx='10' ry='10' width='80' height='20' />
	</ContentLoader>
)

export default SkeletonWeather
