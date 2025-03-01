
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<main>
				<h1>Polling App</h1>
				<Link href="/poll">Polls</Link>
			</main>
		</div>
	);
}
