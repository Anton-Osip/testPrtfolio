import { FlexWrapper } from '../../components/FlexWrapper'
import { Icon } from '../../components/icon/Icon'
import { S } from './Footer_Styles'
const socialItemsData = [
	{ idIcon: 'instagramIcon', width: '21', height: '21', viewBox: '0 0 21 21' },
	{ idIcon: 'telegramIcon', width: '21', height: '21', viewBox: '0 0 21 21' },
	{ idIcon: 'vkIcon', width: '21', height: '21', viewBox: '0 0 21 21' },
	{ idIcon: 'linkedinIcon', width: '21', height: '21', viewBox: '0 0 21 21' },
]
export const Footer: React.FC = () => {
	return (
		<S.Footer>
			<FlexWrapper direction='column' align='center'>
				<S.Name>Svetlana</S.Name>
				<S.SocialList>
					{socialItemsData.map(s => (
						<S.SocialItem key={s.idIcon}>
							<S.SocialLink>
								<Icon
									idIcon={s.idIcon}
									width={s.width}
									height={s.height}
									viewBox={s.viewBox}
								/>
							</S.SocialLink>
						</S.SocialItem>
					))}
				</S.SocialList>
				<S.Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</S.Copyright>
			</FlexWrapper>
		</S.Footer>
	)
}
