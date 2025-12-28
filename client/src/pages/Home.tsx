import { useState } from 'react'

import NewPollForm from '../components/NewPollForm'
import PollList from '../components/PollList'
import PopUp from '../components/PopUp';
import RegisterForm from '../components/RegisterForm';
const Home = () => {
	const [ showNewPollPopUp, setShowNewPopUp ] = useState<boolean>(false);

	const openNewPollForm = () => {
		setShowNewPopUp(true);
	}

	const closeNewPollForm = () => {
		setShowNewPopUp(false);
	}

	return (
		<>
			<button
				className="mr-3 px-4 py-2 bg-blue-600 rounded text-zinc-100 font-semibold hover:bg-blue-700"
				onClick={openNewPollForm}>
				<span>New Poll</span>
			</button>

			<div>
				<RegisterForm />
			</div>

			<section>
				<PollList />
			</section>

			<PopUp
				showPopup={showNewPollPopUp}
				onClose={closeNewPollForm}>
				<NewPollForm />
			</PopUp>
		</>
	)
}

export default Home