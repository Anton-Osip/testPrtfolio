import styled from 'styled-components'
import { Button } from '../../../components/Button'
import { Container } from '../../../components/Container'
import { SectionTitle } from '../../../components/SectionTitle'
import { theme } from '../../../styles/Theme'

export function Contact() {
	return (
		<StyledContacts>
			<Container>
				<SectionTitle>Contact</SectionTitle>
				<StyledForm>
					<Field placeholder='name' />
					<Field placeholder='subject' />
					<Field placeholder='Message' as={'textarea'} />
					<Button type='submit'>Send message</Button>
				</StyledForm>
			</Container>
		</StyledContacts>
	)
}

const StyledContacts = styled.section``

const StyledForm = styled.form`
	max-width: 540px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
	margin: 0 auto;

	textarea {
		resize: none;
		height: 155px;
	}
`
const Field = styled.input`
	width: 100%;
	border: 1px solid ${theme.colors.borderColor};
	background-color: ${theme.colors.secondaryBg};
	padding: 7px 15px;
	color: ${theme.colors.font};
	font-family: Poppins;
	font-size: 12px;
	font-weight: 400;
	line-height: 18px;
	letter-spacing: 5%;

	&::placeholder {
		color: ${theme.colors.placeholderColor};
		text-transform: capitalize;
	}

	&:focus-visible {
		outline: 1px solid ${theme.colors.borderColor};
	}
`
