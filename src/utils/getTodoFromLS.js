export const getTodoFromLS = () => {
    const data = localStorage.getItem('todo');
    const tasks = JSON.parse(data) || [];

    return tasks;
};
