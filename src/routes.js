export const todosRoot = {
    path: '/todos',
    link: () => '/todos',
}

export const todoDetails = {
    path: '/todos/:id',
    link: id => `/todos/${id}`,
}
