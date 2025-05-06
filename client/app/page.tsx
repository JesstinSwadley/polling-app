import Link from "next/link";
import HomePollList from "./components/HomePollList";

export default function Home() {
	return (
		<>
			<li>
				<Link href="/polls">Create Poll</Link>
			</li>
			

			<HomePollList />
		</>
	);
}
