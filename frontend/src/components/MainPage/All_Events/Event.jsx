import './Event.css'

function Event(){
    return (
			<div className='card_event'>
				<p className='card_date'>dd.mm.yy</p>
				<p className='img_card'> изображение</p>
				<div className='card_info'>
					<h3>Title</h3>
					<p>City</p>
					<p className='card_go'>Перейти</p>
				</div>
			</div>
		)
}

export default Event