import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import img from '../../../assets/images/project-1.jpg'
import img2 from '../../../assets/images/project-2.jpg'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { S } from './Works_Styles'
import { TabMenu, tabStatusType } from './tabMenu/TabMenu'
import { Work } from './work/Work'

const tabsItems: Array<{
	title: string
	status: tabStatusType
}> = [
	{ title: 'All', status: 'all' },
	{ title: 'landing page', status: 'landing' },
	{ title: 'React', status: 'react' },
	{ title: 'SPA', status: 'spa' },
]
const worksData = [
	{
		title: 'Social Network',
		src: img,
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		type: 'spa',
	},
	{
		src: img2,
		title: 'Timer',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		type: 'react',
	},
]
export const Works: React.FC = () => {
	const [currentFilterStatus, setCurrentFilterStatus] = useState('all')
	let filteredWorks = worksData

	if (currentFilterStatus === 'landing') {
		filteredWorks = worksData.filter(work => work.type === 'landing')
	}
	if (currentFilterStatus === 'react') {
		filteredWorks = worksData.filter(work => work.type === 'react')
	}
	if (currentFilterStatus === 'spa') {
		filteredWorks = worksData.filter(work => work.type === 'spa')
	}

	function changeFilterStatus(value: tabStatusType) {
		setCurrentFilterStatus(value)
	}

	return (
		<S.Works id='works'>
			<Container>
				<SectionTitle>My Works</SectionTitle>
				<TabMenu
					tabsItems={tabsItems}
					changeFilterStatus={changeFilterStatus}
					currentFilterStatus={currentFilterStatus}
				/>
				<FlexWrapper justify='space-between' align='flex-start' wrap='wrap'>
					<AnimatePresence>
						{filteredWorks.map(work => (
							<motion.div
								style={{ width: '400px', flexGrow: 1, maxWidth: '540px' }}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								key={work.title}
								layout
							>
								<Work
									key={work.title}
									src={work.src}
									title={work.title}
									text={work.text}
								/>
							</motion.div>
						))}
					</AnimatePresence>
				</FlexWrapper>
			</Container>
		</S.Works>
	)
}
