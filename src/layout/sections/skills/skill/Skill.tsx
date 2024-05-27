import styled from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'

type SkillPropsType = {
	iconId: string
	title: string
	text: string
}

export function Skill(props: SkillPropsType) {
	return (
		<StyledSkill>
			<Icon idIcon={props.iconId} />
			<SkillTitle>{props.title}</SkillTitle>
			<SkillText>{props.text}</SkillText>
		</StyledSkill>
	)
}

const StyledSkill = styled.div`
	width: 30%;
	background-color: #ffc9c9;
	margin: 10px;
`
const SkillTitle = styled.h3``
const SkillText = styled.p``
