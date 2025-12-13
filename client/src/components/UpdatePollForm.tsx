import { type FormEvent } from "react"

// Assign Backend API URL to variable
const API_URL = import.meta.env.VITE_API_URL

type poll = {
	pollId: number
}

const UpdatePollForm = ({ pollId }: poll) => {
	console.log(pollId);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form: HTMLFormElement = e.target as HTMLFormElement;
		const formData: FormData = new FormData(form);

		const id = formData.get("id");
		const pollQuery = formData.get("pollQueryInput");

		// ID is number
		const idNum: number = Number(id);

		await fetch(`${API_URL}/v1/polls/update`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'PATCH',
			body: JSON.stringify({
				id: idNum,
				pollQuery
			})
		});
	}

	return (
		<>
			<form
				className='shadow-md p-4 mx-4 flex-col bg-white'
				onSubmit={handleSubmit}>
				<div 
					className="mb-5">
					<label
						className="block mb-2 text-sm"
						htmlFor="pollIdInput">
							<span>Poll ID</span>
					</label>
					
					<input
						className="block w-full p-2.5 bg-white outline-gray-300 placeholder:text-gray-400 outline-solid rounded-sm"
						id="pollIdInput"
						name="id"
						placeholder="Poll ID"
						type="text" 
						required
						/>
				</div>

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
						name="pollQuery"
						placeholder="Poll Query"
						type="text" 
						required
						/>
				</div>

				<button
					className="mb-3 p-2 bg-blue-500 text-white rounded cursor-pointer"
					type="submit">
					<span>Update Poll</span>
				</button>
			</form>
		</>
	)
}

export default UpdatePollForm