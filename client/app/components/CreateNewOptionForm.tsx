import React from 'react'

const CreateNewOptionForm = () => {
	return (
		<>
			<form action="">
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
					<label htmlFor="pollOptionInput">Poll Option</label>

					<input
						id="pollOptionInput"
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