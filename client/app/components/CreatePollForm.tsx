'use client';
import React from "react";

function CreatePollForm () {
	async function FormAction(formData: FormData) {
		const pollTitle = formData.get('pollTitleInput')

		await fetch('http://localhost:8080/poll', {
			headers: {
				'Content-Type': 'application/json'
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
					type="submit">Create Poll</button>
			</form>
		</>
	)
}

export default CreatePollForm