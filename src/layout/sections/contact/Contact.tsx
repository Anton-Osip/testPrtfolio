import styled from 'styled-components'
import { Button } from '../../../components/Button'
import { SectionTitle } from '../../../components/SectionTitle'

export function Contact() {
	return (
		<StyledContacts>
			<SectionTitle>Contact</SectionTitle>
			<StyledForm>
				<Field placeholder='name' />
				<Field placeholder='subject' />
				<Field placeholder='Message' as={'textarea'} />
				<Button type='submit'>Send message</Button>
			</StyledForm>
		</StyledContacts>
	)
}

const StyledContacts = styled.section`
	min-height: 50vh;
	background-color: #ffebab;
`
const StyledForm = styled.form`
	max-width: 500px;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin: 0 auto;
`
const Field = styled.input``
