import PollCard from "../components/PollCard";
import CreatePollForm from "../components/CreatePollForm";
import UpdatePollForm from "../components/UpdatePollForm";
import DeletePollForm from "../components/DeletePollForm";

interface Polls {
	id: number,
	title: string
}

const PollsPage = async () => {
	const res = await fetch('http://localhost:8080/polls/all')

	const polls: Polls[] = await res.json();

	return (
		<>
			<h1>Current Polls</h1>
			<div>
				{polls.map(poll => <PollCard key={poll.id} title={poll.title}/>)}
			</div>

			<div className="flex flex-col justify-center items-center">	
				<h2 className="text-4xl m-4">Create A New Poll</h2>

				<CreatePollForm />
			</div>

			<div>
				<h2 className="text-4xl m-4">Update A Poll</h2>

				<UpdatePollForm />
			</div>

			<div>
				<h2 className="text-4xl m-4">Delete A Poll</h2>

				<DeletePollForm />
			</div>
		</>
	)
}

export default PollsPage;