import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.tasks.push(action.payload);
        },
        removeTodo(state, action) {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        changeTodo(state, action) {
            // console.log(action.payload);
            const findIndex = state.tasks.findIndex((obj) => obj.id === action.payload.id);
            state.tasks = state.tasks.map((task) => {
                if (findIndex >= 0) {
                    state.tasks[findIndex].title = action.payload.changeValue;
                }
                return task;
            });
        },
        checkTodo(state, action) {
            const findIndex = state.tasks.findIndex((obj) => obj.id === action.payload.id);
            state.tasks = state.tasks.map((task) => {
                if (findIndex >= 0) {
                    state.tasks[findIndex].statusCheck = !action.payload.statusCheck;
                }
                return task;
            });
        },
    },
});

export const { addTodo, removeTodo, checkTodo, changeTodo } = todoSlice.actions;
export default todoSlice.reducer;
