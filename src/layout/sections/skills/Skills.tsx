import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { S } from './Skills_styles'
import { Skill } from './skill/Skill'

const SkillData = [
	{
		iconId: 'htmlIcon',
		title: 'html5',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
	},
	{
		iconId: 'cssIcon',
		title: 'css3',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
	},
	{
		iconId: 'reactIcon',
		title: 'REACT',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
	},
	{
		iconId: 'tsIcon',
		title: 'typescript',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
	},
	{
		iconId: 'scIcon',
		title: 'styled components',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
	},
	{
		iconId: 'figmaIcon',
		title: 'WEB DESIGN ',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
	},
]

export const Skills: React.FC = () => {
	return (
		<S.Skills id='skills'>
			<Container>
				<SectionTitle>My Skills</SectionTitle>
				<FlexWrapper wrap='wrap' justify='space-between'>
					{SkillData.map(skill => (
						<Skill
							key={skill.title}
							iconId={skill.iconId}
							title={skill.title}
							text={skill.text}
						/>
					))}
				</FlexWrapper>
			</Container>
		</S.Skills>
	)
}
