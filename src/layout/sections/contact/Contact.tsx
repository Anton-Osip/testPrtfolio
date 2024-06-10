import emailjs from '@emailjs/browser'
import { ElementRef, useRef } from 'react'
import { Button } from '../../../components/Button'
import { Container } from '../../../components/Container'
import { SectionTitle } from '../../../components/SectionTitle'
import { S } from './Contact_Styles'

export const Contact: React.FC = () => {
	const form = useRef<ElementRef<'form'>>(null)

	const sendEmail = (e: any) => {
		e.preventDefault()

		if (!form.current) return

		emailjs
			.sendForm('service_ljzz8sn', 'template_fruhsic', form.current, {
				publicKey: 'VMT00cW0vuf1D_gAh',
			})
			.then(
				() => {
					console.log('SUCCESS!')
				},
				error => {
					console.log('FAILED...', error.text)
				}
			)
		e.target.reset()
	}
	return (
		<S.Contacts id='contact'>
			<Container>
				<SectionTitle>Contact</SectionTitle>
				<S.Form ref={form} onSubmit={sendEmail}>
					<S.Field placeholder='name' name='user_name' />
					<S.Field placeholder='subject' name='subject' />
					<S.Field placeholder='Message' name='message' as={'textarea'} />
					<Button type='submit'>Send message</Button>
				</S.Form>
			</Container>
		</S.Contacts>
	)
}
