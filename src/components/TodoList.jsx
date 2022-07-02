import React from 'react';
import { useSelector } from 'react-redux';
import { todoSelcet } from '../redux/slices/todo/selectors';
import { getTodoFromLS } from '../utils/getTodoFromLS';

import Todo from './Todo';

const TodoList = () => {
    const { tasks } = useSelector(todoSelcet);
    const isMounted = React.useRef(false);

    React.useEffect(() => {
        if (isMounted.current) {
            localStorage.setItem('todo', JSON.stringify(tasks));
        }
        isMounted.current = true;
    }, [tasks]);

    return (
        <div className="todoList">
            {tasks.length > 0 && tasks.map((todo) => <Todo key={todo.id} {...todo} />)}
        </div>
    );
};

export default TodoList;
