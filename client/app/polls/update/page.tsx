import React from "react"

import UpdatePollForm from "@/app/components/polls/UpdatePollForm";

function UpdatePollPage() {
	return (
		<>
			<h1>Update Poll</h1>

			<div>
				<h2 className="text-4xl m-4">Update A Poll</h2>

				<UpdatePollForm />
			</div>
		</>
	)
}

export default UpdatePollPage;