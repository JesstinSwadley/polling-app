'use client';
import React from 'react'

const CreateNewPollForm = () => {
	const NewPollFormAction = async (formData : FormData) => {
		const pollQuestion = formData.get("pollQuestionInput");

		await fetch("http://localhost:8080/polls/create", {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify({
				pollQuestion
			})
		});
	}

	return (
		<>
			<form 
				action={NewPollFormAction}>
				<div>
					<label 
						htmlFor="pollQuestionInput">
							Poll Query
					</label>
					<input
						id="pollQuestionInput"
						type="text" />
				</div>
				<button 
					type="submit">
						Create New Poll
				</button>
			</form>
		</>
	)
}

export default CreateNewPollForm