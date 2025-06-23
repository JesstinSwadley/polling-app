'use client'
import React from 'react'

const CreateNewVoteForm = () => {
	const newVoteFormAction = async (formData: FormData) => {
		const pollId = formData.get("votePollIdInput");
		const optionId = formData.get("voteOptionIdInput");

		await fetch(`${process.env.NODE_API}/votes/create`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify({
				pollId,
				optionId
			})
		});
	}

	return (
		<>
			<form action={newVoteFormAction}>
				<div>
					<label
						className="m-4 text-sm/6 font-medium text-gray-900"
						htmlFor="votePollIdInput">
							Poll Id
						</label>

					<input
						className="p-4 grow text-gray-900 border border-blue-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
						id="votePollIdInput"
						type="text" />
				</div>

				<div>
					<label 
						className="m-4 text-sm/6 font-medium text-gray-900"
						htmlFor="voteOptionIdInput">
							Option Id
					</label>

					<input
						className="p-4 grow text-gray-900 border border-blue-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
						id="voteOptionIdInput"
						type="text" />
				</div>

				<button
					className="p-4 text-white bg-blue-600 rounded-md cursor-pointer"
					type="submit">
						Create New Vote
				</button>
			</form>
		</>
	)
}

export default CreateNewVoteForm