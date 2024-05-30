import styled from 'styled-components'
import image from '../../../assets/images/photo.jpg'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { theme } from '../../../styles/Theme'

export function Main() {
	return (
		<StyledMain>
			<Container>
				<FlexWrapper align='center' justify='space-between'>
					<div>
						<SmallText>Hi There</SmallText>
						<Name>
							I am <span>Svetlana Dyablo</span>
						</Name>
						<MainTitle>A Web Developer. </MainTitle>
					</div>
					<PhotoWrapper>
						<Photo src={image} alt='photo' />
					</PhotoWrapper>
				</FlexWrapper>
			</Container>
		</StyledMain>
	)
}

const StyledMain = styled.section`
	min-height: 100vh;
	display: flex;
`

const Photo = styled.img`
	width: 350px;
	height: 430px;
	object-fit: cover;
`
const PhotoWrapper = styled.div`
	position: relative;
	z-index: 0;

	&::before {
		content: '';
		display: inline-block;
		width: 360px;
		height: 470px;
		border: 5px solid ${theme.colors.accent};
		position: absolute;
		top: -24px;
		left: 24px;
		z-index: -1;
	}
`
const MainTitle = styled.h1`
	color: rgb(255, 255, 255);
	font-size: 27px;
	font-weight: 400;
	letter-spacing: 0%;
`
const SmallText = styled.span`
	font-size: 14px;
	font-weight: 400;
`

const Name = styled.h2`
	font-family: Josefin Sans, sans-serif;
	font-size: 50px;
	font-weight: 700;
	letter-spacing: 5%;
	margin: 10px 0;
	span {
		position: relative;
		z-index: 0;
		&::before {
			content: '';
			position: absolute;
			bottom: 0;
			z-index: -1;

			display: inline-block;
			width: 100%;
			height: 20px;
			background-color: ${theme.colors.accent};
		}
	}
`
