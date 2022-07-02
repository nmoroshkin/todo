import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';

import { addTodo } from '../../redux/slices/todo/slice';

const MyInput = ({ value, setValue }) => {
    const dispatch = useDispatch();

    const handleEnterTodo = (e) => {
        if ((e.key === 'Enter' || e.target.tagName === 'BUTTON') && value !== '') {
            const todo = {
                id: Date.now(),
                title: value,
                statusCheck: false,
            };
            dispatch(addTodo(todo));
            setValue('');
        }
    };

    return (
        <div className="inputTodo">
            <TextField
                label="todo"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleEnterTodo}
                size="small"
                InputLabelProps={{ className: 'textfield__label' }}
                InputProps={{ className: 'textfield__input' }}
            />
            <Button
                onClick={handleEnterTodo}
                style={{
                    borderRadius: 10,
                }}
            >
                +
            </Button>
        </div>
    );
};

export default MyInput;
