import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Skill } from './skill/Skill'

export function Skills() {
	return (
		<StyledSkills>
			<SectionTitle>My Skills</SectionTitle>
			<FlexWrapper wrap='wrap' justify='space-between'>
				<Skill
					iconId='htmlIcon'
					title='html5'
					text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
				/>
				<Skill
					iconId='cssIcon'
					title='css3'
					text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
				/>
				<Skill
					iconId='reactIcon'
					title='REACT'
					text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
				/>
				<Skill
					iconId='tsIcon'
					title='typescript'
					text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
				/>
				<Skill
					iconId='scIcon'
					title='styled components'
					text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
				/>
				<Skill
					iconId='figmaIcon'
					title='WEB DESIGN  '
					text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
				/>
			</FlexWrapper>
		</StyledSkills>
	)
}

const StyledSkills = styled.section`
	background-color: #ffb5b5;
	min-height: 100vh;
`
