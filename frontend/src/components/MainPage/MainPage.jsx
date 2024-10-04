import Events from "./All_Events/Events"
import My_Events from "./My_events/My_Events"
import Navigation from "./Navigation/Navigation"
import React, { useState, useRef, useMemo } from 'react'
import Input from './comp/Input' // импорт компонента
import Counter from './comp/Counter'
import PostItem from './comp/PostItem'
import PostList from './comp/PostList'
import MyButton from './comp/UI/button/MyButton'
import MyInput from './comp/UI/input/MyInput'
import PostForm from './comp/PostForm'
import MySelect from './comp/UI/select/MySelect'
import './My_events/My_Events.css'


function MainPage(){
	const [posts, setPosts] = useState([])

	const createPost = newPost => {
		setPosts([...posts, newPost])
	}	

    return (
			<div>
				<Navigation />
				<Events />

				{/* Условная отрисовка */}
				<h3 className='My_Events'>Создать мероприятие</h3>
				<PostForm create={createPost} />

				<h3 className='My_Events'>Мои мероприятия</h3>
				<PostList posts={posts} />
			</div>
		)
}

export default MainPage