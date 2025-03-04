'use client';
import React from "react";

function UpdateOptionForm() {
	async function FormAction(formData: FormData) {
		const pollOption = formData.get('pollOptionInput');
		const optionId = formData.get('optionIdInput');

		await fetch('http://localhost:8080/options/update', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'PATCH',
			body: JSON.stringify({
				updateOption: pollOption,
				optionId
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
					htmlFor="pollOptionInput">Update Poll Option</label>
				<input
					className="p-4 grow text-gray-900 border border-blue-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
					id="pollOptionInput" 
					name="pollOptionInput" 
					type="text"
				/>
				
				<label
					className="m-4 text-sm/6 font-medium text-gray-900"
					htmlFor="optionIdInput">Option Id</label>
				<input
					className="p-4 grow text-gray-900 border border-blue-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
					id="optionIdInput" 
					name="optionIdInput" 
					type="text"
				/>

				<button
					className="p-4 text-white bg-blue-600 rounded-md cursor-pointer"
					type="submit">Update Option</button>
			</form>
		</>
	)
}

export default UpdateOptionForm