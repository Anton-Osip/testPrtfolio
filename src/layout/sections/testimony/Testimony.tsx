import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Icon } from '../../../components/icon/Icon'
import { Slider } from '../../../components/slider/Slider'
import { IconWrapper } from '../skills/skill/Skill'

export function Testimony() {
	return (
		<StyledTestimony>
			<SectionTitle>Testimony</SectionTitle>
			<FlexWrapper direction='column' align='center'>
				<IconWrapper>
					<Icon idIcon='quoteIcon' />
				</IconWrapper>
				<Slider />
			</FlexWrapper>
		</StyledTestimony>
	)
}

const StyledTestimony = styled.section`
	${IconWrapper} {
		margin: 40px 0 72px;
	}
`
