/* eslint-disable react-hooks/exhaustive-deps */
// outsource dependencies
import { Spinner } from 'reactstrap';
import { ListGroup } from 'reactstrap';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// local dependencies
import TodoItem from '../TodoItem/TodoItem';
import { initialize } from '../../pages/TodoApp/actions';


const TodoList = () => {
    const todos = useSelector(state => state.todosReducer.todos);
    const initialized = useSelector(state => state.todosReducer.initialized);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initialize());
    }, []);

    if (!initialized) {
        return <div>
        <Spinner type="grow" color="primary" />
      </div>;
    }

    return (
        <ListGroup className="todo-list">
            { (todos || []).map(todo => <TodoItem key={todo.id} {...todo} />) }
        </ListGroup>
    )
}

export default TodoList;