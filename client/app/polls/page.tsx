import React from 'react';
import Link from 'next/link';
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