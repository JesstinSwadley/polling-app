import React from "react";
import CreateNewPollForm from "@/app/components/polls/forms/CreateNewPollForm";

const CreatePollsPage = async () => {
	return (
		<>
			<h1>Current Polls</h1>
			<div className="flex flex-col justify-center items-center">	
				<h2 className="text-4xl m-4">Create A New Poll</h2>

				<CreateNewPollForm />
			</div>
		</>
	)
}

export default CreatePollsPage;