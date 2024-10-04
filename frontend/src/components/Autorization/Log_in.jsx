import './Log_in.css'
import React, { useState, useNavigate } from 'react'
import { Link} from 'react-router-dom'

function Log_in(){
	const[formData, setFormData] = useState({
		email:'',
		password:'',

	});

	const handleChange = (e) =>{
		const {name, value} = e.target;
		setFormData({
			...formData,
			[name]:value,
		});
	};

	const handleSubmit = async(e) =>{


		// e.preventDefault();
		// const server = await fetch('http://172.25.14.139:8090/api/auth/register', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// })
		// const data = await server.json()
		// console.log(data)
	}
		

    return (
			<div className='log_in'>
				<b> Добро пожаловать!</b>
				<form className='values' onSubmit={handleSubmit}>
					<input
						type='email'
						id='email'
						name='email'
						placeholder='Email'
						value={formData.email}
						onChange={handleChange}
						required
					/>
					<input
						type='password'
						id='password'
						name='password'
						placeholder='Пароль'
						value={formData.password}
						onChange={handleChange}
						required
					/>
					<p className='link_pass'>Забыли пароль?</p>
					<Link to={'/main_page'}>
						<button className='enter' type='submit'>
							Войти
						</button>
					</Link>
				</form>

				<p className='want_ref'>
					Нет аккаунта?{' '}
					<p className='link'>
						<Link to='/regist'>Зарегистрируйтесь сейчас</Link>
					</p>
				</p>

				<div className='enter_from'>
					<p>Вход через</p>
					<div>
						<a className='g'>G</a>
						<a className='f'>f</a>
					</div>
				</div>
			</div>
		)
}

export default Log_in