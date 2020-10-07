/* eslint-disable react-hooks/exhaustive-deps */
// outsource dependencies
import { Badge } from 'reactstrap';
import { Spinner } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { ButtonToggle } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import { INITIALIZE, CLEAR_TODO } from './actions';

const TodoDetail = ({ match }) => {
    const dispatch = useDispatch();
    const initialized = useSelector(state => state.todoReducer.initialized);
    const todo = useSelector(state => state.todoReducer.todo);

    useEffect(() => {
        dispatch({ type: INITIALIZE, id: match.params.id });
    }, []);

    useEffect(() => () => dispatch({ type: CLEAR_TODO }), []);

    if (!initialized) {
        return <Jumbotron>
                <Spinner type="grow" color="primary" />
        </Jumbotron>
    }

    return (
        <Jumbotron >
            <Link to="/todos">
                <ButtonToggle className="p-1 d-block" color="info">All Todos</ButtonToggle>{' '}
            </Link>
            <h3>{todo.title}</h3>
            <Badge 
                color={todo.completed ? 'success' : 'warning'} 
                className="p-2"
            >
                {todo.completed ? 'completed' : 'not completed'}
            </Badge>
        </Jumbotron>
    )
}

export default TodoDetail;