const NewPollForm = () => {
	const NewPollFormAction = async (formData: FormData) => {
		const pollQuery = formData.get("pollQueryInput");

		await fetch(`http://localhost:8000/v1/polls/create/new`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify({
				pollQuery
			})
		});
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