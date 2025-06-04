import Link from "next/link";
import HomePollList from "./components/Polls/HomePollList";

export default function Home() {
	return (
		<>
			<h1>Home Page</h1>

			<HomePollList />
		</>
	);
}
