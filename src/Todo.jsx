import { useState } from 'react';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodo } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';

import './style.css';

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const checkTask = (todo) => {
    if (todo.complete) return `- [x] ${todo.text}`;
    else return `- [ ] ${todo.text}`;
  }

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd} />
      <IncompleteTodo
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete} />
      <CompleteTodos
        todos={completeTodos}
        onClickBack={onClickBack} />
      <div className='TodoforMattermost'>
        <h4>Mattermost用</h4>
        <p>#### 今週がんばること</p>
        {completeTodos.map((todo) => (
          <p key={todo}>
            - [x] {todo}
          </p>
        ))
        }
        {incompleteTodos.map((todo) => (
          <p key={todo}>
            - [ ] {todo}
          </p>
        ))}
      </div>
    </>
  );
}
