'use client';
import React from 'react'

const UpdateChoiceForm = () => {
	const UpdateChoiceFormAction = async (formData: FormData) => {
		const pollId = formData.get("choicePollIdInput");
		const updateChoiceValue = formData.get("updateChoiceValueInput");

		await fetch(`http://localhost:8080/choices/update`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'PATCH',
			body: JSON.stringify({
				pollId: pollId,
				choiceValue: updateChoiceValue
			})
		});
	}

	return (
		<>
			<form
				className="flex flex-col bg-white rounded-lg p-8 space-y-4"
				action={UpdateChoiceFormAction}>
				<div>
					<label
						className="m-4 text-sm/6 font-medium text-gray-900"
						htmlFor="choicePollIdInput">
							Poll Id
						</label>

					<input
						className="p-4 grow text-gray-900 border border-blue-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
						id="choicePollIdInput"
						type="text" />
				</div>

				<div>
					<label
						className="m-4 text-sm/6 font-medium text-gray-900" 
						htmlFor="updateChoiceValueInput">
							Update Choice Value
					</label>

					<input
						className="p-4 grow text-gray-900 border border-blue-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
						id="updateChoiceValueInput"
						type="text" />
				</div>

				<button
					className="p-4 text-white bg-blue-600 rounded-md cursor-pointer"
					type="submit">
						Update Choice
				</button>

			</form>
		</>
	)
}

export default UpdateChoiceForm