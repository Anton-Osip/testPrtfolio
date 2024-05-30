import styled from 'styled-components'
import { Button } from '../../../components/Button'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'

export function Slogan() {
	return (
		<StyledSlogan>
			<Container>
				<FlexWrapper direction='column' align='center'>
					<SectionTitle>I Am Available For Freelance</SectionTitle>
					<Button>Hire me</Button>
				</FlexWrapper>
			</Container>
		</StyledSlogan>
	)
}

const StyledSlogan = styled.section`
	min-height: 30vh;
	background-color: #fb91ff;
`
