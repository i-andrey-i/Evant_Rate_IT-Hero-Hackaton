
import My_Event_Item from './My_Event_item'
import './My_Events.css'

function My_Events(){
    return (
			<div className='My_Events'>
				<h3>Мои мероприятия</h3>
				<My_Event_Item />
				<My_Event_Item />
			</div>
		)
}
export default My_Events