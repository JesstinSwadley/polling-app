'use client';
import React from 'react'

const DeletePollForm = () => {
	const DeletePollFormAction = async (formData: FormData) => {
		const deletePollId = formData.get("deletePollIdInput");

		await fetch(`${process.env.NODE_API}/polls/delete?pollId=${deletePollId}`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'DELETE',
		});
	}


	return (
		<>
			<form 
				action={DeletePollFormAction}>
				<div>
					<label

						htmlFor="deletePollIdInput">Poll Id</label>
					<input
						id="deletePollIdInput" 
						type="text" />
				</div>
				<button>Delete Poll</button>
			</form>
		</>
	)
}

export default DeletePollForm