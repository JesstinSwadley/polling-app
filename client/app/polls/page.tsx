import React from 'react';
import CreateNewPollForm from '@/app/components/Polls/CreateNewPollForm';

const PollsPage = () => {
	return (
		<>
			<h1>Poll Route</h1>

			<div className="flex flex-col justify-center items-center">
				<CreateNewPollForm />
			</div>
		</>
	)
}

export default PollsPage;