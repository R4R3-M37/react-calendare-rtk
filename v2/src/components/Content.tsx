import React from 'react'

const Content = ({ day }: any): any => {
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

export default Content
