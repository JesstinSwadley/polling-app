import PollOptionsList from '@/app/components/Options/PollOptionsList'
import React from 'react'

const UniquePollPage = (title: string) => {
	return (
		<>
			{title}

			<PollOptionsList />
		</>
	)
}

export default UniquePollPage