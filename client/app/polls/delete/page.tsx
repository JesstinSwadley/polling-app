import DeletePollForm from '@/app/components/Polls/DeletePollForm'
import React from 'react'

const DeletePollPage = () => {
	return (
		<>
			<h1>Delete Poll Route</h1>

			<div className="flex flex-col justify-center items-center">
				<DeletePollForm />
			</div>
		</>
	)
}

export default DeletePollPage