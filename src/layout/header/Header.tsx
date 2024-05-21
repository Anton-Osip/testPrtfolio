import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'

export function Header() {
	return (
		<StyledHeader>
			<Logo />
			<Menu />
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	background-color: #a5fe8c;
	display: flex;
	justify-content: space-between;
`
