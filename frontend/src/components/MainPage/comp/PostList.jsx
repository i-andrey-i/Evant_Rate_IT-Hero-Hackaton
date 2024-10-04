import React, { useState } from 'react'
import PostItem from './PostItem'
import { Link } from 'react-router-dom'
import EventPage from './EventPage';
//         тк знаем, что props объект - можно так
const PostList = ({posts, title, remove}) => {
    return (
			<div>
				<h1 style={{ textAlign: 'center' }}>{title}</h1>
				{posts.map((post, index) => (
					<Link to={'/main_page/${event.id}'}>
						<PostItem
							remove={remove}
							number={index + 1}
							post={post}
							key={post.id}
						/>
					</Link>
				))}
			</div>
		)
};
export default PostList;