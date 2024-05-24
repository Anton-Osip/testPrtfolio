import styled from 'styled-components'

type WorkPropsType = { title: string; text: string; src: string }

export function Work(props: WorkPropsType) {
	return (
		<StyledWork>
			<Image src={props.src} alt={props.title} />
			<Title>{props.title}</Title>
			<Text>{props.text}</Text>
			<Link href='#'>demo</Link>
			<Link href='#'>Code</Link>
		</StyledWork>
	)
}

const StyledWork = styled.div`
	background-color: #ffef9e;
	max-width: 540px;
	width: 100%;
`
const Image = styled.img`
	width: 100%;
	height: 260px;
	object-fit: cover;
`
const Title = styled.h3``
const Text = styled.p``
const Link = styled.a``
