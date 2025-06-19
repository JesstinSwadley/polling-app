import React from 'react'
import UpdatePollForm from '@/app/components/Polls/UpdatePollForm';

const UpdatePollPage = () => {
	return (
		<>
			<h1>Update Poll Route</h1>

			<div className="flex flex-col justify-center items-center">
				<UpdatePollForm />
			</div>
		</>
	)
}

export default UpdatePollPage;