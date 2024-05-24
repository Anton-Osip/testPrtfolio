import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'
const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']
export function Header() {
	return (
		<StyledHeader>
			<Logo />
			<Menu menuItems={items} />
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	background-color: #a5fe8c;
	display: flex;
	justify-content: space-between;
`
