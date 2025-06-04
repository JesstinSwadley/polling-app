'use client';
import React from 'react'

const UpdatePollForm = () => {
	const UpdatePollFormAction = async (formData: FormData) => {
		const updatePollId = formData.get("updatePollIdInput");
		const updatePollQuestion = formData.get("updatePollQuestionInput");

		await fetch(`${process.env.NODE_API}/polls/update`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'PATCH',
			body: JSON.stringify({
				pollId: updatePollId,
				pollQuestion: updatePollQuestion
			})
		});
	}

	return (
		<>
			<form 
				action={UpdatePollFormAction}>
				<div>
					<label

						htmlFor="updatePollIdInput">Poll Id</label>
					<input
						id="updatePollIdInput" 
						type="text" />
				</div>
				<div>
					<label htmlFor="updatePollQuestionInput">Update Poll Question</label>
					<input
						id="updatePollQuestionInput"
						type="text" />
				</div>
				<button>Update Poll</button>
			</form>
		</>
	)
}

export default UpdatePollForm