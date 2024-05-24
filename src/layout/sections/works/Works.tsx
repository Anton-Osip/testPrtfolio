import styled from 'styled-components'
import img from '../../../assets/images/project-1.jpg'
import img2 from '../../../assets/images/project-2.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Menu } from '../../../components/menu/Menu'
import { Work } from './work/Work'

const worksItems = ['All', 'landing page', 'React', 'SPA']

export function Works() {
	return (
		<StyledWorks>
			<SectionTitle>My Works</SectionTitle>
			<Menu menuItems={worksItems} />
			<FlexWrapper justify='space-around'>
				<Work
					title='Social Network'
					src={img}
					text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
				/>
				<Work
					src={img2}
					title='Timer'
					text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
				/>
			</FlexWrapper>
		</StyledWorks>
	)
}

const StyledWorks = styled.section`
	min-height: 100vh;
	background-color: #b4dbfb;
`
