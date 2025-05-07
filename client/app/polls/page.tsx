import React from 'react';
import Link from 'next/link';
import CreateNewPollForm from '@/app/components/CreateNewPollForm';

const PollsPage = () => {
	return (
		<>
			<h1>Poll Route</h1>

			<Link href="/polls/update">Update Poll</Link>

			<CreateNewPollForm />
		</>
	)
}

export default PollsPage;