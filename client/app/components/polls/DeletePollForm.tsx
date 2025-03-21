'use client';
import React from "react";

function DeletePollForm () {
	async function FormAction(formData: FormData) {
		const pollId: any = formData.get('pollIdInput');
		const queryParams = new URLSearchParams({ pollId });

		await fetch(`http://localhost:8080/polls/delete?${queryParams}`, {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'DELETE'
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

				<button
					className="p-4 text-white bg-blue-600 rounded-md cursor-pointer"
					type="submit">Delete Poll</button>
			</form>
		</>
	)
}

export default DeletePollForm