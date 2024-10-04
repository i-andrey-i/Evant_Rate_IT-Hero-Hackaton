// Так же компонент можно создавать с помощью классов
// ПОДХОД УСТАРЕВШИЙ
import React from 'react';

class Counter extends React.Component{
    // создание состояния в классовом компоненте
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    // функция не вызывается, а передается как ссылка
    increment(){
        this.setState({count: this.state.count + 1})     // изменение переменной не на прямую, а функцией, предназначенной для этого
    }

    decrement(){
        this.setState({count: this.state.count - 1})
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>

                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

export default Counter;