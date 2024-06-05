import styled from 'styled-components'
import img from '../../../assets/images/project-1.jpg'
import img2 from '../../../assets/images/project-2.jpg'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { TabMenu } from './tabMenu/TabMenu'
import { Work } from './work/Work'

const worksItems = ['All', 'landing page', 'React', 'SPA']

export function Works() {
	return (
		<StyledWorks>
			<Container>
				<SectionTitle>My Works</SectionTitle>
				<TabMenu menuItems={worksItems} />
				<FlexWrapper justify='space-between' align='flex-start' wrap='wrap'>
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
			</Container>
		</StyledWorks>
	)
}

const StyledWorks = styled.section`
	${FlexWrapper} {
		gap: 30px;
	}
`
