import { Container } from '@mui/system';
import { useAppSelector } from '../hooks/reduxHooks';

import Todo from './Todo';

const TodoList = () => {
    const { tasks } = useAppSelector(({ todo }) => todo);

    return (
        <Container maxWidth="sm" sx={{ height: '70vh', overflow: 'auto' }}>
            {tasks.length > 0 && tasks.map((todo) => <Todo key={todo.id} {...todo} />)}
        </Container>
    );
};

export default TodoList;
