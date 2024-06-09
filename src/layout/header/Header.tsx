import { useEffect, useState } from 'react'
import { Container } from '../../components/Container'
import { FlexWrapper } from '../../components/FlexWrapper'
import { Logo } from '../../components/logo/Logo'
import { s } from './Header_styles'
import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu'
import { MobileMenu } from './headerMenu/mobileMenu/MobileMenu'

export const Header: React.FC = () => {
	const [width, setWidth] = useState(window.innerWidth)
	const breakpoint = 768

	useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth)
		window.addEventListener('resize', handleWindowResize)
		return () => window.removeEventListener('resize', handleWindowResize)
	}, [])

	return (
		<s.Header>
			<Container>
				<FlexWrapper justify='space-between' align='center'>
					<Logo />
					{width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
				</FlexWrapper>
			</Container>
		</s.Header>
	)
}
