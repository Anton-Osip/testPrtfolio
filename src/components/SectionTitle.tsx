import styled from 'styled-components'
import { theme } from '../styles/Theme'

export const SectionTitle = styled.h2`
	font-family: Josefin Sans, sans-serif;
	font-size: 36px;
	font-weight: 600;
	line-height: 36px;
	letter-spacing: 5px;
	text-align: center;
	position: relative;
	margin-bottom: 90px;

	&::before {
		content: '';
		display: inline-block;
		width: 55px;
		height: 1px;
		background-color: ${theme.colors.font};
		position: absolute;
		left: 50%;
		bottom: -30px;
		transform: translateX(-50%);
	}
`
