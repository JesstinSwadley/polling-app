'use client';
import React from 'react';

const DeleteOptionForm = () => {
	const DeleteOptionFormAction = async (formData: FormData) => {
		const deleteOptionId = formData.get("deleteOptionIdInput");

		await fetch(`${process.env.NODE_API}/polls/delete?pollId=${deleteOptionId}`, {
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
				action={DeleteOptionFormAction}>
				<div>
					<label
						className="m-4 text-sm/6 font-medium text-gray-900"
						htmlFor="deleteOptionIdInput">
							Option Id
					</label>

					<input
						className="p-4 grow text-gray-900 border border-blue-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
						id="deleteOptionIdInput"
						type="text" />
				</div>

				<button
					className="p-4 text-white bg-blue-600 rounded-md cursor-pointer"
					type="submit">
						Delete Option
				</button>
			</form>
		</>
	)
}

export default DeleteOptionForm