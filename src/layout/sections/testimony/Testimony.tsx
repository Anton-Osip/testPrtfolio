import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Icon } from '../../../components/icon/Icon'
import { Slider } from '../../../components/slider/Slider'

export function Testimony() {
	return (
		<StyledTestimony>
			<SectionTitle>Testimony</SectionTitle>
			<FlexWrapper direction='column' align='center'>
				<Icon idIcon='quoteIcon' />
				<Slider />
			</FlexWrapper>
		</StyledTestimony>
	)
}

const StyledTestimony = styled.section`
	background-color: #90a4ff;
`
