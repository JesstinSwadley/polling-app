'use client';
import React from 'react'

const UpdatePollForm = () => {
	return (
		<>
			<form action="">
				<div>
					<label

						htmlFor="updatePollIdInput">Poll Id</label>
					<input
						id="updatePollIdInput" 
						type="text" />
				</div>
				<div>
					<label htmlFor="updatePollQuestionInput">Update Poll Question</label>
					<input
						id="updatePollQuestionInput"
						type="text" />
				</div>
				<button>Update Poll</button>
			</form>
		</>
	)
}

export default UpdatePollForm