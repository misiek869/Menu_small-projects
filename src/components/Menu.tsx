import { type MenuItem } from '../data'

type MenuProps = {
	items: MenuItem[]
}

const Menu = ({ items }: MenuProps) => {
	return (
		<div className='section-center'>
			{items.map(item => {
				return <div>{item.title}</div>
			})}
		</div>
	)
}

export default Menu
