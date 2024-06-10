import { Link } from 'react-scroll'
import styled, { css } from 'styled-components'
import { theme } from '../../../styles/Theme'

const StyledMobileMenu = styled.nav``
const BurgerButton = styled.button<{ isOpen: boolean }>`
	position: fixed;
	width: 200px;
	height: 200px;
	top: -100px;
	right: -100px;
	z-index: 99999999;

	span {
		display: block;
		width: 36px;
		height: 2px;
		background: ${theme.colors.font};
		left: 40px;
		bottom: 50px;
		position: absolute;

		${props =>
			props.isOpen &&
			css<{ isOpen: boolean }>`
				background: transparent;
			`}
		&::before {
			content: '';
			display: block;
			position: absolute;
			width: 36px;
			height: 2px;
			background: ${theme.colors.font};
			transform: translateY(-10px);
			${props =>
				props.isOpen &&
				css<{ isOpen: boolean }>`
					transform: translateY(0px) rotate(-45deg);
				`}
		}
		&::after {
			content: '';
			display: block;
			width: 24px;
			height: 2px;
			background: ${theme.colors.font};
			transform: translateY(10px);
			position: absolute;
			right: 0;
			${props =>
				props.isOpen &&
				css<{ isOpen: boolean }>`
					width: 36px;
					transform: translateY(0px) rotate(45deg);
				`}
		}
	}
`

const StyledDesktopMenu = styled.nav`
	ul {
		display: flex;
		gap: 30px;
		justify-content: center;
	}
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
	position: fixed;
	background-color: rgba(31, 31, 32, 0.9);
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 999999;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: translateY(-100%);
	transition: 1s ease-in-out;

	ul {
		display: flex;
		gap: 0px;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		transition: 1s ease-in-out;
	}
	${props =>
		props.isOpen &&
		css<{ isOpen: boolean }>`
			transform: translateY(0%);
			& ul {
				gap: 30px;
			}
		`}
`

const Mask = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	display: inline-block;
	height: 50%;
	overflow: hidden;
	color: ${theme.colors.accent};
	transition: ${theme.animations.transition};

	& + & {
		top: 50%;
		span {
			display: inline-block;
			transform: translateY(-50%);
		}
	}
`

const NavLink = styled(Link)`
	font-family: Josefin Sans, sans-serif;
	font-size: 30px;
	font-weight: 400;
	text-align: center;
	color: transparent;

	&::before {
		content: '';
		display: inline-block;
		height: 3px;
		background-color: ${theme.colors.accent};
		position: absolute;
		top: 50%;
		left: -10px;
		right: -10px;
		z-index: 1;
		transform: scale(0);
		transition: ${theme.animations.transition};
	}
	&:hover,
	&.active {
		&::before {
			transform: scale(1);
		}

		${Mask} {
			transform: skew(12deg) translateX(5px);
			color: ${theme.colors.font};
			& + ${Mask} {
				transform: skew(12deg) translateX(-5px);
			}
		}
	}
`

const MenuItem = styled.li`
	position: relative;
`

export const S = {
	StyledMobileMenu,
	BurgerButton,
	StyledDesktopMenu,
	MobileMenuPopup,
	Mask,
	NavLink,
	MenuItem,
}
