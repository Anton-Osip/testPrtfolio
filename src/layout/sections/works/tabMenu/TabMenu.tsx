import styled from 'styled-components'
import { Link } from '../../../../components/Link'

export const TabMenu: React.FC<{ menuItems: Array<string> }> = (props: {
	menuItems: Array<string>
}) => {
	return (
		<StyledTabMenu>
			<ul>
				{props.menuItems.map((item, index) => (
					<ListItem key={index}>
						<Link href=''>{item}</Link>
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
