import React from 'react';
import classes from './MyButton.module.css';

// {props.children} - добавление вложенных элементов в props

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};
export default MyButton;