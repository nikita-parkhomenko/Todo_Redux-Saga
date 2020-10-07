// outsource dependencies
import { ListGroup } from 'reactstrap';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// local dependencies
import TodoItem from '../TodoItem/TodoItem';
import { initialize } from '../../redux/actions';
import Loader from '../../UI/loader/loader';


const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const initialized = useSelector(state => state.initialized);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initialize());
    }, []);

    if (!initialized) {
        return <Loader />;
    }

    return (
        <ListGroup className="todo-list">
            { (todos || []).map(todo => <TodoItem key={todo.id} {...todo} />) }
        </ListGroup>
    )
}

export default TodoList;