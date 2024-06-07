import styled from 'styled-components'
import { Link } from '../../../../components/Link'

export type tabStatusType = 'all' | 'landing' | 'react' | 'spa'

type TabMenuPropsType = {
	currentFilterStatus: string
	changeFilterStatus: (value: tabStatusType) => void
	tabsItems: Array<{
		title: string
		status: tabStatusType
	}>
}

export const TabMenu: React.FC<TabMenuPropsType> = (
	props: TabMenuPropsType
) => {
	return (
		<StyledTabMenu>
			<ul>
				{props.tabsItems.map((item, index) => (
					<ListItem key={item.title}>
						<Link
							active={props.currentFilterStatus === item.status}
							as={'button'}
							onClick={() => {
								props.changeFilterStatus(item.status)
							}}
						>
							{item.title}
						</Link>
					</ListItem>
				))}
			</ul>
		</StyledTabMenu>
	)
}

const StyledTabMenu = styled.nav`
	ul {
		margin: 0 auto 40px;
		display: flex;
		justify-content: space-between;
		max-width: 352px;
		width: 100%;
	}
`

const ListItem = styled.li``
