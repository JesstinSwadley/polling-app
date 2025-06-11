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
			<form action={newOptionFormAction}>
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
					<label htmlFor="optionValueInput">Option Value</label>

					<input
						id="optionValueInput"
						type="text" />
				</div>

				<button
					type="submit">
					Create New Option
				</button>
			</form>
		</>
	)
}

export default CreateNewOptionForm