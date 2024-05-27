import styled from 'styled-components'
import image from '../../../assets/images/photo.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper'

export function Main() {
	return (
		<StyledMain>
			<FlexWrapper align='center' justify='space-between'>
				<div>
					<span>Hi There</span>
					<Name>I am Svetlana Dyablo</Name>
					<MainTitle>A Web Developer. </MainTitle>
				</div>
				<StyledPhoto src={image} alt='photo' />
			</FlexWrapper>
		</StyledMain>
	)
}

const StyledMain = styled.div`
	background-color: #a2ebff;
	min-height: 100vh;
`

const StyledPhoto = styled.img`
	width: 350px;
	height: 430px;
	object-fit: cover;
`

const MainTitle = styled.h1``
const Name = styled.h2``
