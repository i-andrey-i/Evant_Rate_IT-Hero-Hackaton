import { useParams, Link } from 'react-router-dom'
import React, { useState, useHistory } from 'react'
import './EventPage.css'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'

const EventPage = () => {
	const { id } = useParams()
	const [criter, setCriter] = useState([])
	const [newCriter, setNewCriter] = useState({ critName: '', critDict: '' })

	const addNewCrit = e => {
		e.preventDefault()

		const newCrit = {
			...newCriter,
			id: Date.now(),
		}
		setCriter([...criter, newCrit])
		setNewCriter({ critName: '', critDict: '' })
	}


	return (
		<div>
			<h3 className='pageName'>Критерии оценки мероприятия</h3>
			<MyInput
				value={newCriter.critName}
				onChange={e => setNewCriter({ ...newCriter, critName: e.target.value })}
				type='text'
				placeholder='Название критерия'
			/>
			<MyInput
				value={newCriter.critDict}
				onChange={e => setNewCriter({ ...newCriter, critDict: e.target.value })}
				type='text'
				placeholder='Описание критерия'
			/>
			<MyButton onClick={addNewCrit}> Создать критерий </MyButton>
			<ul>
				{criter.map((crit, index) => (
					<li className='criterBlock' key={crit.id}>
						<h4 className='criterTitle'>{crit.critName}</h4>
						<p className='criterDisc'>{crit.critDict}</p>
					</li>
				))}
			</ul>
			<Link to={'/main_page/qr-code/${event.id}'}>
				<MyButton>Продолжить</MyButton>
			</Link>
		</div>
	)
}

export default EventPage
