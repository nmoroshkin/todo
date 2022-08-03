import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';

import { addTodo } from '../../redux/slices/todo/slice';

type MyInputProps = {
    value: string;
    setValue: (text: string) => void;
};

const MyInput: React.FC<MyInputProps> = ({ value, setValue }) => {
    const dispatch = useDispatch();

    const handleEnterTodo = (
        e: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement> | any,
    ) => {
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
        <Box
            sx={{
                alignSelf: 'center',
                marginBottom: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
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
        </Box>
    );
};

export default MyInput;
