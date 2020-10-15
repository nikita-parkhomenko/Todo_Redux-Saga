// outsource dependencies
import { Badge } from 'reactstrap';
import { Alert } from 'reactstrap';
import { Button } from 'reactstrap';
import { Spinner } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// local dependencies
import TYPE from './actions';
import { todosRoot } from '../../routes';
import TodoAdditionalForm from '../../components/TodoAdditionalForm/TodoAdditionalForm';

const TodoDetail = ({ match }) => {
    const {id} = match.params;

    const dispatch = useDispatch();
    const todo = useSelector(state => state.todoReducer.todo);
    const initialized = useSelector(state => state.todoReducer.initialized);
    const errorMessage = useSelector(state => state.todoReducer.errorMessage);

    useEffect(() => {
        dispatch({ type: TYPE.INITIALIZE, payload: {id} });

        return () => dispatch({ type: TYPE.CLEAR })
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
                { errorMessage ? <Alert className="mt-2" color="danger"> {errorMessage} </Alert>
                    : <>
                        <Badge color="secondary" pill>
                        {todo.priority}
                        </Badge>
                        <h3
                            className={`${todo.completed ? 'completed' : ''} pointer`}
                            onClick={() => dispatch({ type: TYPE.TOGGLE_COMPLETED, payload: {id} })}
                        >
                            {todo.title}
                        </h3>
                        <Badge
                            color={todo.completed ? 'success' : 'warning'}
                            className="p-2 mb-3"
                        >
                            {todo.completed ? 'completed' : 'not completed'}
                        </Badge>
                        <h5 className="mb-5">
                            {todo.description}
                        </h5>

                        <TodoAdditionalForm todo={todo} />
                    </>
                }

        </Jumbotron>
    )
}

export default TodoDetail;
