import React from 'react';
import DeleteOptionForm from '@/app/components/Options/DeleteOptionForm';

const DeleteOptionPage = () => {
	return (
		<>
			<h1>Delete Option Route</h1>

			<div className="flex flex-col justify-center items-center">
				<DeleteOptionForm />
			</div>
		</>
	)
}

export default DeleteOptionPage