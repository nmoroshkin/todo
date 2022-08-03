import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
    id: number;
    title: string;
    statusCheck: boolean;
}

interface StateTasks {
    tasks: Task[];
}

const initialState: StateTasks = {
    tasks: [],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<Task>) {
            state.tasks.push(action.payload);
        },
        removeTodo(state, action: PayloadAction<number>) {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        changeTodo(state, action: PayloadAction<{ id: number; changeValue: string }>) {
            const findIndex = state.tasks.findIndex((obj) => obj.id === action.payload.id);
            state.tasks = state.tasks.map((task) => {
                if (findIndex >= 0) {
                    state.tasks[findIndex].title = action.payload.changeValue;
                }
                return task;
            });
        },
        checkTodo(state, action: PayloadAction<Task>) {
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
