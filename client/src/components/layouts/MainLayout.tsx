import { Outlet } from "react-router";
import Nav from "./Nav"


export default function MainLayout() {
	return (
		<>
			<Nav />
			<main>
				<Outlet />
			</main>
		</>
	);
}