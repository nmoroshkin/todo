import React from 'react';
import { useDispatch } from 'react-redux';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { removeTodo, checkTodo, changeTodo } from '../redux/slices/todoSlice';
import MyCheckBox from './MyCheckBox';
import { ListItem, ListItemButton, TextField } from '@mui/material';

const Todo = ({ id, title, statusCheck }) => {
    const dispatch = useDispatch();

    const ref = React.useRef();
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

    const saveChanges = (e) => {
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
            <ListItemButton className="todoList__task" component="div">
                <div className="task__body">
                    <MyCheckBox statusCheck={statusCheck} handleChecked={handleChecked} />
                    {!change ? (
                        <span
                            onDoubleClick={esketitChange}
                            className={statusCheck ? 'checked' : ''}
                        >
                            {title}
                        </span>
                    ) : (
                        <TextField
                            autoFocus
                            variant="filled"
                            value={changeValue}
                            onChange={(e) => setChangeValue(e.target.value)}
                            onKeyDown={saveChanges}
                            size="small"
                            InputLabelProps={{ className: 'textfield__label' }}
                        />
                    )}
                </div>
                <div className="delete">
                    <HighlightOffIcon
                        className="delete__btn"
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
