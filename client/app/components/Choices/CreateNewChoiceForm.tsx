'use client'
import React from 'react'

const CreateNewChoiceForm = () => {
	const newChoiceFormAction = async (formData: FormData) => {
		const pollId = formData.get("choicePollIdInput");
		const choiceValue = formData.get("choiceValueInput");

	console.log(pollId);

		await fetch(`http://localhost:8080/choices/create`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify({
				pollId,
				choiceValue
			})
		});
	}

	return (
		<>
			<form
				className="flex flex-col bg-white rounded-lg p-8 space-y-4"
				action={newChoiceFormAction}>
				<div>
					<label
						className="m-4 text-sm/6 font-medium text-gray-900"
						htmlFor="choicePollIdInput">
							Poll Id
						</label>

					<input
						className="p-4 grow text-gray-900 border border-blue-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
						id="choicePollIdInput"
						name="choicePollIdInput"
						type="text" />
				</div>

				<div>
					<label 
						className="m-4 text-sm/6 font-medium text-gray-900"
						htmlFor="choiceValueInput">
							Choice Value
					</label>

					<input
						className="p-4 grow text-gray-900 border border-blue-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
						id="choiceValueInput"
						name="choiceValueInput"
						type="text" />
				</div>

				<button
					className="p-4 text-white bg-blue-600 rounded-md cursor-pointer"
					type="submit">
						Create New Choice
				</button>
			</form>
		</>
	)
}

export default CreateNewChoiceForm