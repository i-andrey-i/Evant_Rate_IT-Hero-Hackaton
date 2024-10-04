import './Registration.css'
import './Input_Registration.css'
import React, { useState } from 'react'

function Registration(){
    const [formData, setFormData] = useState({
            user:'',
			email: '',
			password: '',
		})

		const handleChange = e => {
			const { name, value } = e.target
			setFormData({
				...formData,
				[name]: value,
			})
		}

		const handleSubmit = async e => {
			e.preventDefault()
			const server = await fetch(
				'http://172.25.14.139:8090/api/auth/register',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			const data = await server.json()
			console.log(data)
		}

    return (
			<div className='registration'>
				<b>Регистрация</b>
				<p className='reg_bott'>Создайте учетную запись, чтобы начать работу</p>

				<form className='input_registration' onSubmit={handleSubmit}>
					<b>ФИО</b>
					<input
						type='text'
						id='user'
						name='user'
						placeholder='ФИО'
						value={formData.user}
						onChange={handleChange}
						required
					/>

					<b>Email</b>
					<input
						type='email'
						id='email'
						name='email'
						placeholder='Email'
						value={formData.email}
						onChange={handleChange}
						required
					/>

					<b>Пароль</b>
					<input
						type='password'
						id='password'
						name='password'
						placeholder='Пароль'
						value={formData.password}
						onChange={handleChange}
						required
					/>
				</form>

				<div className='private'>
					<div className='square'></div>
					<span>
						<p>Я прочитал и согласен с условиями и</p>
						<p className='color'>политикой конфиденцивальности</p>
					</span>
				</div>

				<button className='enter_button' type='submit'>
					Зарегистрироваться
				</button>
			</div>
		)
}

export default Registration