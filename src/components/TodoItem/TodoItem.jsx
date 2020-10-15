// outsource dependencies
import React, { useCallback } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

// local dependencies
import { todoDetails } from '../../routes';
import TYPE from '../../pages/TodoApp/actions';

const TodoItem = ({ title, id, completed }) => {
    const dispatch = useDispatch();
    const { disabled } = useSelector(state => state.todosReducer);

    return (
            <ListGroupItem
                action
                className="d-flex justify-content-between align-items-center font-weight-bold"
            >
                <Container>
                    <Row className="align-items-center">
                        <Col xs="9" lg="10">
                            <Link
                                className={`${completed ? 'completed' : ''}`}
                                to={todoDetails.link(id)}
                            >
                                {title}
                            </Link>
                        </Col>
                        <Col xs="3" lg="2" >
                            <Button
                                color="danger"
                                disabled={disabled}
                                onClick={useCallback(() => dispatch({ type: TYPE.REMOVE, payload: {id} }), [dispatch, id]) }
                            >
                                remove
                            </Button>
                        </Col>
                    </Row>
                </Container>

            </ListGroupItem>
    )
}

export default TodoItem;
