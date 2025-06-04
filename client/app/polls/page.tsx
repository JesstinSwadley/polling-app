import React from 'react';
import Link from 'next/link';
import CreateNewPollForm from '@/app/components/Polls/CreateNewPollForm';

const PollsPage = () => {
	return (
		<>
			<h1>Poll Route</h1>

			<CreateNewPollForm />
		</>
	)
}

export default PollsPage;