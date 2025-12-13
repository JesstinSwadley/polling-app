import { useEffect, useState } from "react";
import PopUp from "./PopUp";
import UpdatePollForm from "./UpdatePollForm";
import DeletePollForm from "./DeletePollForm";

// Assign Backend API URL to variable
const API_URL = import.meta.env.VITE_API_URL

type Poll = {
	id: number,
	query: string,
}

const PollList = () => {
	const [polls, setPolls] = useState<Poll[]>([]);
	const [poll, setPollId] = useState<number>(0);
	const [showEditPopup, setShowEditPopup] = useState<boolean>(false);
	const [showDeletePopup, setShowDeletePopup] = useState<boolean>(false);

	useEffect(() => {
		const fetchPolls = async () => {
			const res = await fetch(`${API_URL}/v1/polls/list-all`);

			const pollsList: Poll[] = await res.json();

			setPolls([...pollsList]);
		}

		fetchPolls();
	}, []);

	const openEditForm = (poll: number) => {
		setPollId(poll);
		setShowEditPopup(true)
	}

	const openDeleteForm = () => {
		setShowDeletePopup(true)
	}

	const closeEditPopUp = () => {
		setShowEditPopup(false)
	}

	const closeDeletePopUp = () => {
		setShowDeletePopup(false)
	}

	return (
		<div
			className="">
			{
				polls.map(poll => (
					<div
						className="rounded shadow-lg p-4" 
						key={poll.id}>
						<h3
							className="font-bold text-xl mb-2">
								{poll.query}
						</h3>

						<button 
							className="mr-3 px-4 py-2 rounded bg-amber-400 text-stone-900 font-semibold hover:bg-amber-500"
							onClick={() => openEditForm(poll.id)}>
								<span>Edit</span>
						</button>

						<button 
							className="mr-3 px-4 py-2 rounded bg-red-600 text-zinc-100 font-semibold hover:bg-red-700"
							onClick={openDeleteForm}>
								<span>Delete</span>
						</button>
					</div>
				))
			}

			<PopUp
				showPopup={showEditPopup}
				onClose={closeEditPopUp}>
					<UpdatePollForm 
						pollId={poll}/>
			</PopUp>

			<PopUp
				showPopup={showDeletePopup}
				onClose={closeDeletePopUp}>
					<DeletePollForm />
			</PopUp>
		</div>
	)
}

export default PollList