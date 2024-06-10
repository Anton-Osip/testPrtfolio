import { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import styled from 'styled-components'
import { Icon } from '../icon/Icon'

export const GoToBack: React.FC = () => {
	const [showBtn, setShowBtn] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 200) {
				setShowBtn(true)
			} else {
				setShowBtn(false)
			}
		})
	}, [])
	return (
		<>
			{showBtn && (
				<StyledGoToBack
					onClick={() => {
						scroll.scrollToTop()
					}}
				>
					<Icon idIcon='goTopIcon' width='16' height='16' viewBox='0 0 16 16' />
				</StyledGoToBack>
			)}
		</>
	)
}

const StyledGoToBack = styled.button`
	position: fixed;
	bottom: 30px;
	right: 30px;
	background: rgba(0, 0, 0, 0.3);
	padding: 8px;
`
