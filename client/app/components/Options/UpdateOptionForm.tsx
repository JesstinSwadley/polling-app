'use client';
import React from 'react'

const UpdateOptionForm = () => {
	const UpdateOptionFormAction = async (formData: FormData) => {
		const pollId = formData.get("optionPollIdInput");
		const updateOptionValue = formData.get("updateOptionValueInput");

		await fetch(`${process.env.NODE_API}/options/update`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'PATCH',
			body: JSON.stringify({
				pollId: pollId,
				optionValue: updateOptionValue
			})
		});
	}

	return (
		<>
			<form action={UpdateOptionFormAction}>
				<div>
					<label 
						htmlFor="optionPollIdInput">
							Poll Id
						</label>

					<input
						id="optionPollIdInput"
						type="text" />
				</div>

				<div>
					<label htmlFor="updateOptionValueInput">Update Option Value</label>

					<input
						id="updateOptionValueInput"
						type="text" />
				</div>

			</form>
		</>
	)
}

export default UpdateOptionForm