'use client'
import React from 'react'

const CreateNewOptionForm = () => {
	const newOptionFormAction = async (formData: FormData) => {
		const pollId = formData.get("optionPollIdInput");
		const optionValue = formData.get("optionValueInput");

		await fetch(`${process.env.NODE_API}/options/create`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify({
				pollId,
				optionValue
			})
		});
	}

	return (
		<>
			<form
				className="flex flex-col bg-white rounded-lg p-8 space-y-4"
				action={newOptionFormAction}>
				<div>
					<label
						className="m-4 text-sm/6 font-medium text-gray-900"
						htmlFor="optionPollIdInput">
							Poll Id
						</label>

					<input
						className="p-4 grow text-gray-900 border border-blue-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
						id="optionPollIdInput"
						type="text" />
				</div>

				<div>
					<label 
						className="m-4 text-sm/6 font-medium text-gray-900"
						htmlFor="optionValueInput">
							Option Value
					</label>

					<input
						className="p-4 grow text-gray-900 border border-blue-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
						id="optionValueInput"
						type="text" />
				</div>

				<button
					className="p-4 text-white bg-blue-600 rounded-md cursor-pointer"
					type="submit">
						Create New Option
				</button>
			</form>
		</>
	)
}

export default CreateNewOptionForm