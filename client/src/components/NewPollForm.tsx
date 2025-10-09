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
				className="w-full" 
				onSubmit={handleSubmit}>
				<div>
					<label
						className="block"
						htmlFor="pollQueryInput">
							<span>Poll Query</span>
					</label>
					
					<input
						className="bg-white outline-gray-300 placeholder:text-gray-400 outline-solid m-4"
						id="pollQueryInput"
						name="pollQueryInput"
						placeholder="Poll Query"
						type="text" />
				</div>

				<button
					className="bg-blue-500 text-white p-2 rounded cursor-pointer"
					type="submit">
					<span>Create New Poll</span>
				</button>
			</form>
		</>
	)
}

export default NewPollForm