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
			<form action="">
				<div>
					<label htmlFor="deleteOptionIdInput">Option Id</label>

					<input
						id="deleteOptionIdInput"
						type="text" />
				</div>

				<button>Delete Option</button>
			</form>
		</>
	)
}

export default DeleteOptionForm