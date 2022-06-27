import React from 'react';
import { useSelector } from 'react-redux';

import Todo from './Todo';

const TodoList = () => {
    const { tasks } = useSelector(({ todo }) => todo);
    return (
        <div className="todoList">
            {tasks.length > 0 && tasks.map((todo) => <Todo key={todo.id} {...todo} />)}
        </div>
    );
};

export default TodoList;
