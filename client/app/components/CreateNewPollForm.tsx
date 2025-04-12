'use client';
import React from 'react'

const CreateNewPollForm = () => {
	const NewPollFormAction = (formData : FormData) => {
		console.log(formData);
	}

	return (
		<>
			<form action="">
				<div>
					<label 
						htmlFor="pollQueryInput">
							Poll Query
					</label>
					<input
						id="pollQueryInput"
						type="text" />
				</div>
				<button 
					type="submit">
						Create New Poll
				</button>
			</form>
		</>
	)
}

export default CreateNewPollForm