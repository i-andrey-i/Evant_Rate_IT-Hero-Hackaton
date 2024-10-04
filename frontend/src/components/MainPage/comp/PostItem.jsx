import React from 'react';
import MyButton from './UI/button/MyButton';

// компонент может принимать в себя входные данные - props
// Пропсы указываются в App, что передается
// Пример: <PostItem value={222} item={{title: 0}} id={1} ИЛИ <PostItem post={{id:0, title:'Java Script', body: 'Description'}}/>
// обращение к props - названию - что надо
const PostItem = (props) => {

    return (
			<div className='my_event_item'>
				<p> фото</p>
				<ul>
					<li>
						<b>{props.post.title}</b>
					</li>
					<li>{props.post.body}</li>
				</ul>
			</div>
		)
};
export default PostItem;