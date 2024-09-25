import React from 'react'

type TitleProps = {
	text: string
}

const Title = ({ text }: TitleProps) => {
	return <div>{text}</div>
}

export default Title
