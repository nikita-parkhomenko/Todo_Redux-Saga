import React from 'react';
import { ListGroupItem } from 'reactstrap';

import './TodoItem.scss';

const TodoItem = ({ title }) => {
    return (
        <ListGroupItem className="todo-item">
            {title}
        </ListGroupItem>
    )
}

export default TodoItem;