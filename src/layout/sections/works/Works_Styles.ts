import styled from 'styled-components'
import { Button } from '../../../components/Button'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Link } from '../../../components/Link'
import { theme } from '../../../styles/Theme'

const Works = styled.section`
	${FlexWrapper} {
		gap: 30px;
	}
`

const Work = styled.div`
	background-color: ${theme.colors.secondaryBg};

	width: 330px;
	flex-grow: 1;
	@media ${theme.media.desktop} {
		max-width: 540px;
	}

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
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(4px);
		opacity: 0;
	}
	&:hover {
		&::before,
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

	@media ${theme.media.tablet} {
		&::before {
			opacity: 1;
		}
		${Button} {
			opacity: 1;
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

export const S = { Works, Work, Text, Title, Image, ImageWrapper, Description }
