'use client';
import React from "react";

function CreateOptionForm() {
	async function FormAction(formData: FormData) {
		const pollOption = formData.get('pollOptionInput');
		const pollId = formData.get('pollIdInput');

		await fetch('http://localhost:8080/options/create', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				option: pollOption,
				pollId
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
					htmlFor="pollOptionInput">Poll Option</label>
				<input
					className="p-4 grow text-gray-900 border border-blue-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
					id="pollOptionInput" 
					name="pollOptionInput" 
					type="text"
				/>
				
				<label
					className="m-4 text-sm/6 font-medium text-gray-900"
					htmlFor="pollIdInput">Poll Id</label>
				<input
					className="p-4 grow text-gray-900 border border-blue-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
					id="pollIdInput" 
					name="pollIdInput" 
					type="text"
				/>

				<button
					className="p-4 text-white bg-blue-600 rounded-md cursor-pointer"
					type="submit">Create Option</button>
			</form>
		</>
	)
}

export default CreateOptionForm