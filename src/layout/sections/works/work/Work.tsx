import styled from 'styled-components'
import { Button } from '../../../../components/Button'
import { Link } from '../../../../components/Link'
import { theme } from '../../../../styles/Theme'

type WorkPropsType = { title: string; text: string; src: string }

export function Work(props: WorkPropsType) {
	return (
		<StyledWork>
			<ImageWrapper>
				<Image src={props.src} alt={props.title} />
				<Button>view project</Button>
			</ImageWrapper>
			<Description>
				<Title>{props.title}</Title>
				<Text>{props.text}</Text>
				<Link href='#'>demo</Link>
				<Link href='#'>Code</Link>
			</Description>
		</StyledWork>
	)
}

const StyledWork = styled.div`
	background-color: ${theme.colors.secondaryBg};
	max-width: 540px;
	width: 100%;

	${Link} {
		padding: 10px 0;

		& + ${Link} {
			margin-left: 20px;
		}
	}
`

const Description = styled.div`
	padding: 25px 20px;
`
const ImageWrapper = styled.div`
	position: relative;
	&:hover {
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: rgba(0, 0, 0, 0.3);
			backdrop-filter: blur(4px);
		}
		${Button} {
			opacity: 1;
		}
	}
	${Button} {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;

		&::before {
			width: 100%;
			height: 100%;
		}
	}
`

const Image = styled.img`
	width: 100%;
	height: 260px;
	object-fit: cover;
`

const Title = styled.h3``

const Text = styled.p`
	margin: 14px 0 10px;
`
