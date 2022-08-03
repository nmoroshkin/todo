import React from 'react';
import { Box } from '@mui/material';
import { Container } from '@mui/system';
import MyInput from './components/MyInput';
import TodoList from './components/TodoList';

import './scss/style.scss';

const App = () => {
    const [value, setValue] = React.useState('');

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <MyInput value={value} setValue={(text: string) => setValue(text)} />
                <TodoList />
            </Box>
        </Container>
    );
};

export default App;
