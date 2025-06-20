import React from 'react';
import CreateNewOptionForm from '../components/Options/CreateNewOptionForm';

const OptionPage = () => {
	return (
		<>
			<h1>Option Route</h1>

			<div className="flex flex-col justify-center items-center">
				<CreateNewOptionForm />
			</div>
		</>
	)
}

export default OptionPage