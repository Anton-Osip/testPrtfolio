import styled from 'styled-components'
import { Container } from '../../components/Container'
import { FlexWrapper } from '../../components/FlexWrapper'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'
const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']
export function Header() {
	return (
		<StyledHeader>
			<Container>
				<FlexWrapper justify='space-between' align='center'>
					<Logo />
					<Menu menuItems={items} />
				</FlexWrapper>
			</Container>
		</StyledHeader>
	)
}

const StyledHeader = styled.header``
