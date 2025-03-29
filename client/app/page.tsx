import React from "react";
import HomePollList from "./components/polls/display/HomePollList";

export default function Home() {
	return (
		<>
			<main>
				<h1>Polling App</h1>

				<HomePollList />
			</main>
		</>
	);
}
