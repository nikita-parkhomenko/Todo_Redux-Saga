// outsource dependencies
import { Badge } from 'reactstrap';
import { Spinner } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

// local dependencies
import { todosRoot } from '../../routes';
import { INITIALIZE, CLEAR_TODO, TOGGLE_COMPLETED } from './actions';

const TodoDetail = ({ match }) => {
    const {id} = match.params;

    const dispatch = useDispatch();
    const initialized = useSelector(state => state.todoReducer.initialized);
    const todo = useSelector(state => state.todoReducer.todo);

    useEffect(() => {
        dispatch({ type: INITIALIZE, id });

        return () => dispatch({ type: CLEAR_TODO })
    }, [dispatch, id]);

    if (!initialized) {
        return <Jumbotron>
            <div className="text-center">
                <Spinner type="grow" color="primary" />
            </div>
        </Jumbotron>
    }

    return (
        <Jumbotron className="d-flex flex-column align-items-center">
            <Link className="align-self-start" to={todosRoot.link}>
                <Button size="sm" className="p-1" color="info">
                    <span>&#8592;</span>
                    All Todos
                </Button>
            </Link>
            <h3 
                className={`${todo.completed ? 'completed' : ''} pointer`}
                onClick={() => dispatch({ type: TOGGLE_COMPLETED, id })}
            >
                {todo.title}
            </h3>
            <Badge 
                color={todo.completed ? 'success' : 'warning'} 
                className="p-2 w-25"
            >
                {todo.completed ? 'completed' : 'not completed'}
            </Badge>
        </Jumbotron>
    )
}

export default TodoDetail;