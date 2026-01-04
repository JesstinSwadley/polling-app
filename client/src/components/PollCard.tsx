interface PollProp {
	query: string
}

const PollCard = ({query}: PollProp) => {
	return(
		<div className="w-1/4 shadow-lg">
			<div className="m-3">
				<h3 className="font-bold text-xl">
					<span>{query}</span>
				</h3>
			</div>
		</div>
	)
}

export default PollCard