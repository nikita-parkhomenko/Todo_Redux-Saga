// outsource dependencies
import React from 'react';
import { Button } from 'reactstrap';
import { useDispatch} from 'react-redux';
import { ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// local dependencies
import { removeTodo } from '../../pages/TodoApp/actions';

const TodoItem = ({ title, id }) => {
    const dispatch = useDispatch();

    return (
            <ListGroupItem 
                action
                className="d-flex justify-content-between align-items-center font-weight-bold"
            >
                <Link 
                    to={`/todos/${id}`}
                >
                    {title}
                </Link>
                <Button 
                    color="danger"
                    className="todo-item__remove-btn"
                    onClick={() => dispatch(removeTodo(id))}
                >
                    remove
                </Button>
            </ListGroupItem>
    )
}

export default TodoItem;