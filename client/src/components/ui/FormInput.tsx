import React from 'react'

type FormInputProps = {
	label?: string
	name: string
	id?: string
	type?: React.HTMLInputTypeAttribute
	placeholder?: string
	required?: boolean
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

			{label && (
				<label
					className="block mb-2 text-sm font-semibold"
					htmlFor={id}
				>
					<span>{label}</span>
				</label>
			)}
			
			<input
		        id={id}
        		name={name}
        		type={type}
				required={required}
				placeholder={placeholder}
				className="w-full py-3 px-4 rounded-md bg-gray-100 text-lg font-semibold placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"			
			/>
		</div>
	)
}

export default FormInput;