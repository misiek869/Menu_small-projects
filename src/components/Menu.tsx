import { type MenuItemType } from '../data'
import MenuItem from './MenuItem'

type MenuProps = {
	items: MenuItemType[]
}

const Menu = ({ items }: MenuProps) => {
	return (
		<div className='section-center'>
			{items.map(item => {
				return (
					<div key={item.id}>
						<MenuItem item={item} />
					</div>
				)
			})}
		</div>
	)
}

export default Menu
