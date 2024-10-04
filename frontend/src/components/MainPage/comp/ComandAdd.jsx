import { useParams, Link } from 'react-router-dom'
import React, { useState } from 'react'
import './EventPage.css'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'

function ComandAdd() {
	const { id } = useParams()
	const [team, setTeam] = useState([])
	const [newTeam, setNewTeam] = useState({ critName: '', critDict: '' })

	const addNewTeam = e => {
		e.preventDefault()

		const newCrit = {
			...newTeam,
			id: Date.now(),
		}
		setTeam([...team, newCrit])
		setNewTeam({ critName: '', critDict: '' })
	}

	return (
		<div>
			<h3 className='pageName'>Добавить команду</h3>
			<MyInput
				value={newTeam.critName}
				onChange={e => setNewTeam({ ...newTeam, critName: e.target.value })}
				type='text'
				placeholder='Название команды'
			/>
			
			<MyButton onClick={addNewTeam}> Добавить команду </MyButton>
			<ul>
				{team.map((crit, index) => (
					<li className='criterBlock' key={crit.id}>
						<h4 className='criterTitle'>{crit.critName}</h4>
						<p className='criterDisc'>{crit.critDict}</p>
					</li>
				))}
			</ul>
			<Link to={'/main_page/raiting/${event.id}'}>
				<MyButton>Продолжить</MyButton>
			</Link>
		</div>
	)
}

export default ComandAdd
