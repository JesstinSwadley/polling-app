const NewPollForm = () => {
	const NewPollFormAction = (formData: FormData) => {
		const pollQuery = formData.get("pollQueryInput");

		console.log(pollQuery);
	}

	return (
		<>
			<form action={NewPollFormAction}>
				<div>
					<label
						htmlFor="pollQueryInput">
							<span>Poll Query</span>
					</label>
					
					<input
						id="pollQueryInput"
						name="pollQueryInput"
						type="text" />
				</div>

				<button
					type="submit">
					<span>Create New Poll</span>
				</button>
			</form>
		</>
	)
}

export default NewPollForm