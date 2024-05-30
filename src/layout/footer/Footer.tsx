import styled from 'styled-components'
import { FlexWrapper } from '../../components/FlexWrapper'
import { Icon } from '../../components/icon/Icon'
import { theme } from '../../styles/Theme'

export function Footer() {
	return (
		<StyledFooter>
			<FlexWrapper direction='column' align='center'>
				<Name>Svetlana</Name>
				<SocialList>
					<SocialItem>
						<SocialLink>
							<Icon
								idIcon='instagramIcon'
								width='21'
								height='21'
								viewBox='0 0 21 21'
							/>
						</SocialLink>
					</SocialItem>
					<SocialItem>
						<SocialLink>
							<Icon
								idIcon='telegramIcon'
								width='21'
								height='21'
								viewBox='0 0 21 21'
							/>
						</SocialLink>
					</SocialItem>
					<SocialItem>
						<SocialLink>
							<Icon
								idIcon='vkIcon'
								width='21'
								height='21'
								viewBox='0 0 21 21'
							/>
						</SocialLink>
					</SocialItem>
					<SocialItem>
						<SocialLink>
							<Icon
								idIcon='linkedinIcon'
								width='21'
								height='21'
								viewBox='0 0 21 21'
							/>
						</SocialLink>
					</SocialItem>
				</SocialList>
				<Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
			</FlexWrapper>
		</StyledFooter>
	)
}

const StyledFooter = styled.footer`
	background-color: ${theme.colors.primaryBg};
	padding: 40px 0;
`
const Name = styled.span`
	font-family: 'Josefin Sans', sans-serif;
	font-size: 22px;
	font-weight: 700;
	letter-spacing: 3px;
`

const SocialList = styled.ul`
	display: flex;
	gap: 20px;
	margin: 30px 0;
`
const SocialItem = styled.li``
const SocialLink = styled.a`
	border-radius: 50%;
	background-color: rgba(255, 255, 255, 0.1);

	width: 35px;
	height: 35px;

	display: flex;
	align-items: center;
	justify-content: center;

	color: ${theme.colors.accent};

	&:hover {
		color: ${theme.colors.primaryBg};
		transform: translateY(-4px);
		background-color: ${theme.colors.accent};
	}
`
const Copyright = styled.small`
	font-size: 12px;
	font-weight: 400;
	text-align: center;
	opacity: 0.5;
`
