import { FlexWrapper } from '../../../../components/FlexWrapper'
import { Icon } from '../../../../components/icon/Icon'
import { S } from '../Skills_styles'

type SkillPropsType = {
	iconId: string
	title: string
	text: string
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
	return (
		<S.Skill>
			<FlexWrapper direction='column' align='center'>
				<S.IconWrapper>
					<Icon idIcon={props.iconId} />
				</S.IconWrapper>
				<S.SkillTitle>{props.title}</S.SkillTitle>
				<S.SkillText>{props.text}</S.SkillText>
			</FlexWrapper>
		</S.Skill>
	)
}
