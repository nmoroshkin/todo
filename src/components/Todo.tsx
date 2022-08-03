import React from 'react';
import { useDispatch } from 'react-redux';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import MyCheckBox from './MyCheckBox';
import { removeTodo, checkTodo, changeTodo } from '../redux/slices/todo/slice';
import { Box, ListItem, ListItemButton, TextField, Typography } from '@mui/material';

type TodoProps = {
    id: number;
    title: string;
    statusCheck: boolean;
};

const Todo: React.FC<TodoProps> = ({ id, title, statusCheck }) => {
    const dispatch = useDispatch();

    const [change, setChange] = React.useState(false);
    const [changeValue, setChangeValue] = React.useState(title);

    const handleDelTodo = () => {
        dispatch(removeTodo(id));
    };

    const handleChecked = () => {
        dispatch(checkTodo({ id, title, statusCheck }));
    };

    const esketitChange = () => {
        setChange(!change);
    };

    const saveChanges = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') {
            if (e.key === 'Escape') {
                setChange(!change);
                return;
            }
            return;
        }
        dispatch(changeTodo({ id, changeValue }));
        setChange(!change);
    };

    return (
        <ListItem component="div">
            <ListItemButton
                component="div"
                sx={{
                    padding: '5px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    maxWidth: '70%',
                    margin: '0 auto',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <MyCheckBox statusCheck={statusCheck} handleChecked={handleChecked} />
                    {!change ? (
                        <Typography
                            onDoubleClick={esketitChange}
                            component="div"
                            className={statusCheck ? 'checked' : ''}
                            sx={{ width: '100%' }}
                        >
                            {title}
                        </Typography>
                    ) : (
                        <TextField
                            autoFocus
                            variant="filled"
                            value={changeValue}
                            onChange={(e) => setChangeValue(e.target.value)}
                            onKeyDown={saveChanges}
                            size="small"
                        />
                    )}
                </Box>
                <div className="delete">
                    <HighlightOffIcon
                        onClick={handleDelTodo}
                        style={{
                            color: '#ff9ff3',
                        }}
                    />
                </div>
            </ListItemButton>
        </ListItem>
    );
};

export default Todo;
