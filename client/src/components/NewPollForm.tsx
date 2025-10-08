// Assign Backend API URL to variable
const API_URL = import.meta.env.VITE_API_URL

const NewPollForm = () => {
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);

		const pollQuery = formData.get("pollQueryInput")

		const response = await fetch(`${API_URL}/v1/polls/new`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify({
				pollQuery
			})
		});

		console.log(response);
	}

	return (
		<>
			<form 
				onSubmit={handleSubmit}>
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