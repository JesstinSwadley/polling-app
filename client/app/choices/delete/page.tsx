import React from 'react';
import DeleteChoiceForm from '@/app/components/Choices/DeleteChoiceForm';

const DeleteChoicePage = () => {
	return (
		<>
			<h1>Delete Choice Route</h1>

			<div className="flex flex-col justify-center items-center">
				<DeleteChoiceForm />
			</div>
		</>
	)
}

export default DeleteChoicePage