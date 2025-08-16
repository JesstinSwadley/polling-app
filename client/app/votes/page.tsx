import React from 'react'
import CreateNewVoteForm from '../components/Votes/CreateNewVoteForm'

const VotePage = () => {
	return (
		<>
			<h1>Vote Route</h1>

			<div className="flex flex-col justify-center items-center">
				<CreateNewVoteForm />
			</div>
		</>
	)
}

export default VotePage