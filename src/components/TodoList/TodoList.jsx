// outsource dependencies
import { Spinner } from 'reactstrap';
import { ListGroup } from 'reactstrap';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// local dependencies
import TodoItem from '../TodoItem/TodoItem';
import TYPE from '../../pages/TodoApp/actions';


const TodoList = () => {
    const { todos, initialized } = useSelector(state => state.todosReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: TYPE.INITIALIZE });

        return () => dispatch({ type: TYPE.CLEAR })
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
