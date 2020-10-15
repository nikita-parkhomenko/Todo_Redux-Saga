// outsource dependencies
import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

// local dependencies
import { todoDetails } from '../../routes';
import TYPE from '../../pages/TodoApp/actions';

const TodoItem = ({ title, id, completed }) => {
    const dispatch = useDispatch();
    const disabled = useSelector(state => state.todosReducer.disabled);

    return (
            <ListGroupItem
                action
                className="d-flex justify-content-between align-items-center font-weight-bold"
            >
                <Link
                    className={`col-8 ${completed ? 'completed' : ''}`}
                    to={todoDetails.link(id)}
                >
                    {title}
                </Link>
                <Button
                    color="danger"
                    className="col-2"
                    disabled={disabled}
                    onClick={() => dispatch({ type: TYPE.REMOVE, payload: {id} })}
                >
                    remove
                </Button>
            </ListGroupItem>
    )
}

export default TodoItem;
