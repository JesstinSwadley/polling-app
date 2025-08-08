import React from 'react';
import CreateNewChoiceForm from '../components/Choices/CreateNewChoiceForm';

const ChoicePage = () => {
	return (
		<>
			<h1>Choice Route</h1> 

			<div className="flex flex-col justify-center items-center">
				<CreateNewChoiceForm />
			</div>
		</>
	)
}

export default ChoicePage