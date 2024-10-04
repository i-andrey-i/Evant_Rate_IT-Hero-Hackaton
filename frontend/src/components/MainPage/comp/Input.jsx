// работа с компонентом
// Компонент - функция, возвращающая jsx
import React, {useState} from 'react';
const Input = () => {
    const[input, setInput] = useState('Введенный input')
    return (
        <div>
            <h2>{input}</h2>
            {/* передача текста первого   при изменении событие вызывает функцию, куда передает это изменение, помещая в состояние */}
            <input type='text' value={input} onChange={event => setInput(event.target.value)}/>
        </div>

    );
};
export default Input; // импорт компонента