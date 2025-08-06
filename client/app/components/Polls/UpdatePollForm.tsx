'use client';
import React from 'react'

const UpdatePollForm = () => {
	const UpdatePollFormAction = async (formData: FormData) => {
		const updatePollId = formData.get("updatePollIdInput");
		const updatePollQuestion = formData.get("updatePollQuestionInput");

		await fetch(`http://localhost:8080/polls/update`, {
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
				className="flex flex-col bg-white rounded-lg p-8 space-y-4"
				action={UpdatePollFormAction}>
				<div>
					<label
						className="m-4 text-sm/6 font-medium text-gray-900"
						htmlFor="updatePollIdInput">
							Poll Id
					</label>
					<input
						className="p-4 grow text-gray-900 border border-blue-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
						id="updatePollIdInput" 
						type="text" />
				</div>
				<div>
					<label
						className="m-4 text-sm/6 font-medium text-gray-900"
						htmlFor="updatePollQuestionInput">
							Update Poll Question
					</label>
					<input
						className="p-4 grow text-gray-900 border border-blue-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
						id="updatePollQuestionInput"
						type="text" />
				</div>
				<button 
					className="p-4 text-white bg-blue-600 rounded-md cursor-pointer"
					type="submit">
					Update Poll
				</button>
			</form>
		</>
	)
}

export default UpdatePollForm