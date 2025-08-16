import UpdateVoteForm from '@/app/components/Votes/UpdateVoteForm'
import React from 'react'

const UpdateVotePage = () => {
	return (
		<>
			<h1>Update Vote Page</h1>

			<div className="flex flex-col justify-center items-center">
				<UpdateVoteForm />
			</div>
		</>
	)
}

export default UpdateVotePage