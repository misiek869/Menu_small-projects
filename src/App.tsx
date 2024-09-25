import { useState } from 'react'
import Title from './components/Title'

function App() {
	const [count, setCount] = useState(0)

	return (
		<main>
			<section className='menu'>
				<Title text={'menu'} />
			</section>
		</main>
	)
}

export default App
