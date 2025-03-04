import CreateOptionForm from "../components/CreateOptionForm";
import DeleteOptionForm from "../components/DeleteOptionForm";
import PollCard from "../components/PollCard";
import UpdateOptionForm from "../components/UpdateOptionForm";

interface Options {
	id: number,
	option: string,
	pollId: number
}

const OptionsPage = async () => {
	const res = await fetch('http://localhost:8080/options/all')

	const options: Options[] = await res.json();

	return (
		<>
			<h1>Current Options</h1>
			<div>
				{options.map(option => <PollCard key={option.id} title={option.option}/>)}
			</div>

			<div>
				<h2>Create A New Option</h2>

				<CreateOptionForm />
			</div>
			<div>
				<h2>Update An Option</h2>

				<UpdateOptionForm />
			</div>
			<div>
				<h2>Delete An Option</h2>

				<DeleteOptionForm />
			</div>
	</>
	)
}

export default OptionsPage;