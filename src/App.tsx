import { useState } from 'react'
import Title from './components/Title'
import menu from './data'
import { type MenuItemType } from './data'
import Menu from './components/Menu'

function App() {
	const [menuItems, setMenuItems] = useState<MenuItemType[]>(menu)

	return (
		<main>
			<section className='menu'>
				<Title text={'menu'} />
				<Menu items={menuItems} />
			</section>
		</main>
	)
}

export default App
