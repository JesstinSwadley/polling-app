import React from 'react'

type FormInputProps = {
	label: string,
	name: string;
	id?: string;
	type?: React.HTMLInputTypeAttribute;
	placeholder?: string;
  	required?: boolean;
}

const FormInput = ({
	label,
	name,
	id = name,
	type = "text",
	placeholder,
	required = false,
}: FormInputProps) => {
	return (
		<div 
			className="mb-5">
			<label
				className="block mb-2 text-sm"
				htmlFor={id}>
					<span>{label}</span>
			</label>
			
			<input
		        id={id}
        		name={name}
        		type={type}
				required={required}
				placeholder={placeholder}
				className="block w-full p-2.5 bg-white outline-gray-300 outline-solid rounded-sm placeholder:text-gray-400 focus:outline-blue-500"				
			/>
		</div>
	)
}

export default FormInput;