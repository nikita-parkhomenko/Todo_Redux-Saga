import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListGroup } from 'reactstrap';

import './TodoList.scss';

import TodoItem from '../TodoItem/TodoItem';
import { fetchTodos } from '../../redux/actions';


const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    return (
        <ListGroup className="todo-list">
            {
                (todos.length > 0) && (
                    todos.map(todo => (
                        <TodoItem key={todo.id} {...todo} />
                    ))
                )
            }
        </ListGroup>
    )
}

export default TodoList;