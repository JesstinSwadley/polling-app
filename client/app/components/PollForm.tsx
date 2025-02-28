'use client';
import React, {  } from "react";

export default function PollForm () {
	async function FormAction(formData: FormData) {
		const pollTitle = formData.get('pollTitleInput')

		await fetch('http://localhost:8080/poll', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				pollTitle
			})
		})
	}

	return (
		<form action={FormAction}>
			<label htmlFor="pollTitleInput">Poll Title:</label>
			<input 
				id="pollTitleInput" 
				name="pollTitleInput" 
				type="text"
			/>
			<button type="submit">Create Poll</button>
		</form>
	)
}