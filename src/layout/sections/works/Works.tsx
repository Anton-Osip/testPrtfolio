import img from '../../../assets/images/project-1.jpg'
import img2 from '../../../assets/images/project-2.jpg'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { TabMenu } from './tabMenu/TabMenu'
import { Work } from './work/Work'
import { S } from './Works_Styles'

const worksItems = ['All', 'landing page', 'React', 'SPA']
const worksData = [
	{
		title: 'Social Network',
		src: img,
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
	},
	{
		src: img2,
		title: 'Timer',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
	},
]
export const Works: React.FC = () => {
	return (
		<S.Works>
			<Container>
				<SectionTitle>My Works</SectionTitle>
				<TabMenu menuItems={worksItems} />
				<FlexWrapper justify='space-between' align='flex-start' wrap='wrap'>
					{worksData.map(work => (
						<Work
							key={work.title}
							src={work.src}
							title={work.title}
							text={work.text}
						/>
					))}
				</FlexWrapper>
			</Container>
		</S.Works>
	)
}
