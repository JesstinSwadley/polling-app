import React from "react"
import DeletePollForm from "@/app/components/polls/DeletePollForm";

function DeletePollPage() {
	return (
		<>
			<h1>Delete Poll</h1>
			
			<div>
				<h2 className="text-4xl m-4">Delete A Poll</h2>

				<DeletePollForm />
			</div>
		</>
	)
}

export default DeletePollPage;