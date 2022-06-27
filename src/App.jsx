import React from 'react';
import MyInput from './components/MyInput';
import TodoList from './components/TodoList';

import './scss/style.scss';

const App = () => {
    const [value, setValue] = React.useState('');

    return (
        <div className="container">
            <MyInput value={value} setValue={(text) => setValue(text)} />
            <TodoList />
        </div>
    );
};

export default App;
