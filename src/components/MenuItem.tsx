import { type MenuItemType } from '../data'

type MenuItemProps = {
	item: MenuItemType
}

const MenuItem = ({ item }: MenuItemProps) => {
	const { img, title, price, desc } = item

	return (
		<article className='menu-item'>
			<img src={img} alt={title} className='img' />
		</article>
	)
}

export default MenuItem
