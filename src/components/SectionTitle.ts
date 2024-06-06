import styled from 'styled-components'
import { font } from '../styles/Common'
import { theme } from '../styles/Theme'

export const SectionTitle = styled.h2`
	${font({
		family: 'Josefin Sans, sans-serif',
		weight: 600,
		lineHeight: 1.2,
		Fmax: 36,
		Fmin: 30,
	})}
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

		@media ${theme.media.mobile} {
			bottom: -24px;
		}
	}
`
