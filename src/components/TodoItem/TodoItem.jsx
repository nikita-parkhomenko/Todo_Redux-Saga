import React from 'react';

import { ListGroupItem } from 'reactstrap';
import { Button } from 'reactstrap';

import './TodoItem.scss';

const TodoItem = ({ title }) => {
    return (
        <ListGroupItem className="todo-item">
            {title}
            <Button className="todo-item__remove-btn" color="danger">
                remove
            </Button>
        </ListGroupItem>
    )
}

export default TodoItem;