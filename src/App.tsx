import { useState } from 'react'
import Title from './components/Title'
import menu from './data'
import { type Menu } from './data'

function App() {
	const [menuItems, setMenuItems] = useState<Menu[]>(menu)

	return (
		<main>
			<section className='menu'>
				<Title text={'menu'} />
			</section>
		</main>
	)
}

export default App
