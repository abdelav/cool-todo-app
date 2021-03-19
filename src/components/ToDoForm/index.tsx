import * as React from "react";

import { TodoFormInterface, TodoSimpleInterface } from "../../interface";

import { Container, Input } from './styles';

const TodoForm = (props: TodoFormInterface) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [ values, setValues ] = React.useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValues(event.target.value);
  }

  function handleInputEnter(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      const newTodo: TodoSimpleInterface = {
        name: values,
        isCompleted: false
      }

      // Create new todo item
      props.handleTodoCreate(newTodo)

      // Reset the input field
      if (inputRef && inputRef.current) {
        inputRef.current.value = '';
      }
    }
  }

  return (
    <Container>
      <Input
        ref={inputRef}
        type="text"
        placeholder="What I need todo ?"
        onChange={event => handleInputChange(event)}
        onKeyPress={event => handleInputEnter(event)}
      />
    </Container>
  )
}

export default TodoForm;
