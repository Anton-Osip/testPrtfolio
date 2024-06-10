import React from 'react'
import { S } from '../HeaderMenu_Styles'
import { Menu } from '../menu/Menu'

export const DesktopMenu: React.FC = () => {
	return (
		<S.StyledDesktopMenu>
			<Menu />
		</S.StyledDesktopMenu>
	)
}
