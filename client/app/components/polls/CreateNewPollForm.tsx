'use client';
import React from "react";

function CreateNewPollForm () {
	async function FormAction(formData: FormData) {
		const pollTitle = formData.get('pollTitleInput')
		const token = localStorage.getItem('token')

		if (!token) {
			throw new Error("There was an error");
		}

		await fetch('http://localhost:8080/polls/create', {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token
			},
			method: 'POST',
			body: JSON.stringify({
				pollTitle
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
					htmlFor="pollTitleInput">Poll Title</label>
				<input
					className="p-4 grow text-gray-900 border border-blue-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
					id="pollTitleInput" 
					name="pollTitleInput" 
					type="text"
				/>
				<button
					className="p-4 text-white bg-blue-600 rounded-md cursor-pointer"
					type="submit">
						Create New Poll
				</button>
			</form>
		</>
	)
}

export default CreateNewPollForm