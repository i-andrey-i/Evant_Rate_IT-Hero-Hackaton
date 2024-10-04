import './Events.css'
import Event from './Event'

function Events(){
    return (
		<div className='Events'>
			<span className='Title_ev'>
				<h3>Мероприятия</h3>
				<p>Посмотреть все</p>
			</span>

			<Event/>
			
		</div>
	)
}

export default Events