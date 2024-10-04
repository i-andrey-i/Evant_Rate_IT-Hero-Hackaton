import React from 'react'
import { useParams, Link } from 'react-router-dom'
import MyButton from './UI/button/MyButton'

function QrCodePage({ match })  {
	const { id } = useParams()

	return (
		<div>
			<h1>QR код для мероприятия</h1>
			<Link to={'/main_page/commandad/${event.id}'}>
				<MyButton>Продолжить</MyButton>
			</Link>
		</div>
	)
}

export default QrCodePage
