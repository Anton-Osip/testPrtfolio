import styled from 'styled-components'
import { Button } from '../../../components/Button'
import { SectionTitle } from '../../../components/SectionTitle'

export function Slogan() {
	return (
		<StyledSlogan>
			<SectionTitle>I Am Available For Freelance</SectionTitle>
			<Button>Hire me</Button>
		</StyledSlogan>
	)
}

const StyledSlogan = styled.section`
	min-height: 30vh;
	background-color: #fb91ff;
`
