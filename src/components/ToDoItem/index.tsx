import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

// Import interfaces
import { TodoItemInterface } from '../../interface';

import { Item, Status, Input, Delete } from './styles';

const ToDoItem = (props: TodoItemInterface) => {
  return (
    <Item isEven={props.index % 2 === 0}>
      <Status onClick={() => props.handleTodoComplete(props.todo.id)}>
        {
          props.todo.isCompleted
            ? <FontAwesomeIcon fixedWidth size="lg" icon={faCheckSquare} />
            : <FontAwesomeIcon fixedWidth size="lg" icon={faSquare} />
        }
      </Status>

      <Input
        value={props.todo.name}
        isCompleted={props.todo.isCompleted}
        readOnly={props.todo.isCompleted}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleTodoUpdate(event, props.todo.id)}
      />

      <Delete onClick={() => props.handleTodoRemove(props.todo.id)}>
        <FontAwesomeIcon fixedWidth size="lg" icon={faTrashAlt} />
      </Delete>
    </Item>
  )
}

export default ToDoItem;
