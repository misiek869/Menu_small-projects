type TitleProps = {
	text: string
}

const Title = ({ text }: TitleProps) => {
	return (
		<div className='title'>
			<h2>{text}</h2>
		</div>
	)
}

export default Title
