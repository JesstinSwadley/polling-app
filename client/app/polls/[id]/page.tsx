import PollOptionsList from '@/app/components/Choices/PollChoicesList'
import PollVotesList from '@/app/components/Votes/PollVotesList'
import React from 'react'

const UniquePollPage = (title: string) => {
	return (
		<>
			{title}

			<PollOptionsList />

			<PollVotesList />
		</>
	)
}

export default UniquePollPage