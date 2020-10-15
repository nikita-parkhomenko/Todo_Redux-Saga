// outsource dependencies
import { Spinner } from 'reactstrap';
import { ListGroup } from 'reactstrap';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// local dependencies
import TodoItem from '../TodoItem/TodoItem';
import TYPE from '../../pages/TodoApp/actions';


const TodoList = () => {
    const todos = useSelector(state => state.todosReducer.todos);
    const initialized = useSelector(state => state.todosReducer.initialized);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: TYPE.INITIALIZE });
    }, [dispatch]);

    if (!initialized) {
        return <div className="text-center">
                <Spinner type="grow" color="primary" />
            </div>;
    }

    return (
        <ListGroup className="mx-auto">
            { (todos || []).map(todo => <TodoItem key={todo.id} {...todo} />) }
        </ListGroup>
    )
}

export default TodoList;