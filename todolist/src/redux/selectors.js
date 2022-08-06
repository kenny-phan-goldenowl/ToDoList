export const searchText = (state) => state.filter.search;
export const fitlerStatus = (state) => state.filter.status;
export const taskList = (state) => state.todoList;

export const result = (state) => {
    const search = searchText(state);
    const status = fitlerStatus(state);
    const task = taskList(state);
    return task.filter(item => {
        if (status === "All") return item.name.includes(search)
        if (status === "Done") return item.name.includes(search) && item.completed
        if (status === "Wip") return item.name.includes(search) && !item.completed
    })
}

