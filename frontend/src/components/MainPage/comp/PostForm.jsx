import React, {useState} from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({create}) => {
    // чтобы не создавать много состояний сделаем не поле, а объект
    const[post, setPost] = useState({title:'', body:''})
    


    const addNewPost = (e) => {
        e.preventDefault(); // предотвращение обновлений при нажатии

        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title:'', body:'', crit:''})
    }

    return (
			<form>
				{/* управляемый компонент */}
				{/*  передача объекта старого поста со всеми полями и нужное для нас поле */}
				<MyInput
					value={post.title}
					onChange={e => setPost({ ...post, title: e.target.value })}
					type='text'
					placeholder='Название мероприятия'
				/>

				<MyInput
					value={post.body}
					onChange={e => setPost({ ...post, body: e.target.value })}
					type='text'
					placeholder='Название города'
				/>

				<MyButton onClick={addNewPost}> Создать мероприятие </MyButton>
			</form>
		)
};
export default PostForm;