import image from '../../../assets/images/photo.jpg'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { S } from './Main_styles'

export const Main: React.FC = () => {
	return (
		<S.Main>
			<Container>
				<FlexWrapper align='center' justify='space-around' wrap='wrap'>
					<div>
						<S.SmallText>Hi There</S.SmallText>
						<S.Name>
							I am <span>Svetlana Dyablo</span>
						</S.Name>
						<S.MainTitle>A Web Developer. </S.MainTitle>
					</div>
					<S.PhotoWrapper>
						<S.Photo src={image} alt='photo' />
					</S.PhotoWrapper>
				</FlexWrapper>
			</Container>
		</S.Main>
	)
}
