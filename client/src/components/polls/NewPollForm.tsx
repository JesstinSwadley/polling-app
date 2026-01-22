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
				className='shadow-md p-4 mx-4 flex-col bg-white'
				onSubmit={handleSubmit}
				>
				<div 
					className="mb-5">
					<label
						className="block mb-2 text-sm"
						htmlFor="pollQueryInput">
							<span>Poll Query</span>
					</label>
					
					<input
						className="block w-full p-2.5 bg-white outline-gray-300 placeholder:text-gray-400 outline-solid rounded-sm"
						id="pollQueryInput"
						name="pollQueryInput"
						placeholder="Poll Query"
						type="text" 
						required
						/>
				</div>

				<button
					className="mb-3 p-2 bg-blue-500 text-white rounded cursor-pointer"
					type="submit">
					<span>Create New Poll</span>
				</button>
			</form>
		</>
	)
}

export default NewPollForm