
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<main>
				<h1>Polling App</h1>
				<Link href="/polls">Polls</Link>
				<Link href="/options">Options</Link>
				<Link href="/auth/register">Register</Link>
			</main>
		</div>
	);
}
