import NewPollForm from './components/NewPollForm'
import PollList from './components/PollList'

function App() {
	return (
		<>
			<section className='flex justify-center m-5'>
				<NewPollForm />
			</section>
			<section>
				<PollList />
			</section>
		</>
	)
}

export default App
