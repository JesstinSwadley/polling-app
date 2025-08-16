'use client';
import React from 'react'

function DeleteVoteForm() {
	const DeleteVoteFormAction = async (formData: FormData) => {
		const voteId = formData.get("voteIdInput");

		await fetch(`http://localhost:8080/votes/delete?voteId=${voteId}`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'DELETE',
		});
	}

	return (
		<>
			<form
				className="flex flex-col bg-white rounded-lg p-8 space-y-4"
				action={DeleteVoteFormAction}>
				<div>
					<label
						className="m-4 text-sm/6 font-medium text-gray-900"
						htmlFor="voteIdInput">
							Vote Id
						</label>
					<input
						className="p-4 grow text-gray-900 border border-blue-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
						id="voteIdInput"
						name="voteIdInput"
						type="text" />
				</div>

				<button
					className="p-4 text-white bg-blue-600 rounded-md cursor-pointer"
					type="submit">
						Delete Vote
				</button>
			</form>
		</>
	)
}

export default DeleteVoteForm