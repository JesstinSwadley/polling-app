import { type FormEvent } from 'react';
import FormInput from '../../ui/FormInput';

// Assign Backend API URL to variable
const API_URL = import.meta.env.VITE_API_URL;

type poll = {
	pollId: number
}

const DeletePollForm = ({ pollId }: poll) => {
	console.log(pollId);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form: HTMLFormElement = e.target as HTMLFormElement;
		const formData: FormData = new FormData(form);

		const id = formData.get("id");

		// ID is number
		const idNum: number = Number(id);

		await fetch(`${API_URL}/v1/polls/delete`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'PATCH',
			body: JSON.stringify({
				pollId: idNum,
			})
		});
	}


	return (
		<>
			<form
				className='shadow-md p-4 mx-4 flex-col bg-white'
				onSubmit={handleSubmit}>

				<FormInput
					label="Poll ID"
					name="pollIdInput"
					placeholder="Poll ID"
					type="text"
					required
				/>

				<button
					className="mb-3 p-2 bg-blue-500 text-white rounded cursor-pointer"
					type="submit">
					<span>Delete Poll</span>
				</button>
			</form>
		</>
	)
}

export default DeletePollForm;