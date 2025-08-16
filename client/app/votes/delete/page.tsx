import DeleteVoteForm from '@/app/components/Votes/DeleteVoteForm'
import React from 'react'

const DeleteVotePage = () => {
	return (
		<>
			<h1>Update Vote Page</h1>

			<div className="flex flex-col justify-center items-center">
				<DeleteVoteForm />
			</div>
		</>
	)
}

export default DeleteVotePage