import React from "react";
import PollCard from "@/app/components/PollCard";
import CreateNewPollForm from "@/app/components/polls/CreateNewPollForm";
import DeletePollForm from "@/app/components/DeletePollForm";

const CreatePollsPage = async () => {
	// const res = await fetch('http://localhost:8080/polls/all')

	// const polls: Polls[] = await res.json();

	return (
		<>
			<h1>Current Polls</h1>
			{/* <div>
				{polls.map(poll => <PollCard key={poll.id} title={poll.title}/>)}
			</div> */}

			<div className="flex flex-col justify-center items-center">	
				<h2 className="text-4xl m-4">Create A New Poll</h2>

				<CreateNewPollForm />
			</div>

			<div>
				<h2 className="text-4xl m-4">Delete A Poll</h2>

				<DeletePollForm />
			</div>
		</>
	)
}

export default CreatePollsPage;