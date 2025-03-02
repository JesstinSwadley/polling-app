'use client';
import React from "react";

function UpdatePollForm () {
	async function FormAction(formData: FormData) {
		const pollTitle = formData.get('pollTitleInput');
		const pollId = formData.get('pollIdInput');

		await fetch('http://localhost:8080/polls/update', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'PATCH',
			body: JSON.stringify({
				pollId,
				updateTitle: pollTitle
			})
		})
	}

	return (
		<>
			<form
				className="flex flex-col bg-white rounded-lg p-8 space-y-4"
				action={FormAction}>
				<label
					className="m-4 text-sm/6 font-medium text-gray-900"
					htmlFor="pollTitleInput">What's the Poll ID</label>
				<input
					className="p-4 grow text-gray-900 border border-blue-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
					id="pollIdInput" 
					name="pollIdInput" 
					type="number"
				/>

				<label
					className="m-4 text-sm/6 font-medium text-gray-900"
					htmlFor="pollTitleInput">Update Poll Title</label>
				<input
					className="p-4 grow text-gray-900 border border-blue-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
					id="pollTitleInput" 
					name="pollTitleInput" 
					type="text"
				/>					
				<button
					className="p-4 text-white bg-blue-600 rounded-md cursor-pointer"
					type="submit">Update Poll</button>
			</form>
		</>
	)
}

export default UpdatePollForm