import { animateScroll as scroll } from 'react-scroll'
import { Icon } from '../icon/Icon'

export const Logo: React.FC = () => {
	return (
		<a
			onClick={() => {
				scroll.scrollToTop()
			}}
		>
			<Icon idIcon='htmlIcon' width='50' height='50' viewBox='0 0 50 50' />
		</a>
	)
}
