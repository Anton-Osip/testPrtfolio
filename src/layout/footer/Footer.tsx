import styled from 'styled-components'
import { FlexWrapper } from '../../components/FlexWrapper'
import { Icon } from '../../components/icon/Icon'

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
	min-height: 30vh;
	background-color: #ffcf8b;
`
const Name = styled.span``
const SocialList = styled.ul`
	display: flex;
	gap: 30px;
`
const SocialItem = styled.li``
const SocialLink = styled.a``
const Copyright = styled.small``
