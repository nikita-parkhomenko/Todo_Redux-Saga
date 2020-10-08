// outsource dependencies
import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { ListGroupItem } from 'reactstrap';

// local dependencies
import { todoDetails } from '../../routes';
import { removeTodo } from '../../pages/TodoApp/actions';

const TodoItem = ({ title, id, completed }) => {
    const dispatch = useDispatch();

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
                    onClick={() => dispatch(removeTodo(id))}
                >
                    remove
                </Button>
            </ListGroupItem>
    )
}

export default TodoItem;