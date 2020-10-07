// outsource dependencies
import React from 'react';
import { Button } from 'reactstrap';
import { useDispatch} from 'react-redux';
import { ListGroupItem } from 'reactstrap';

// local dependencies
import { removeTodo } from '../../redux/actions';

const TodoItem = ({ title, id }) => {
    const dispatch = useDispatch();

    return (
        <ListGroupItem 
            className="todo-item font-weight-bold"
        >
            {title}
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