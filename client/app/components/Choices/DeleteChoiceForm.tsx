'use client';
import React from 'react';

const DeleteChoiceForm = () => {
	const DeleteChoiceFormAction = async (formData: FormData) => {
		const deleteChoiceId = formData.get("deleteChoiceIdInput");

		await fetch(`${process.env.NODE_API}/choices/delete?pollId=${deleteChoiceId}`, {
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
				action={DeleteChoiceFormAction}>
				<div>
					<label
						className="m-4 text-sm/6 font-medium text-gray-900"
						htmlFor="deleteChoiceIdInput">
							Choice Id
					</label>

					<input
						className="p-4 grow text-gray-900 border border-blue-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
						id="deleteChoiceIdInput"
						type="text" />
				</div>

				<button
					className="p-4 text-white bg-blue-600 rounded-md cursor-pointer"
					type="submit">
						Delete Choice
				</button>
			</form>
		</>
	)
}

export default DeleteChoiceForm