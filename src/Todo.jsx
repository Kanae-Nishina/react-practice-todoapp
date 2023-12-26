import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodo } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';
import { SendWebhook } from './components/SendWebhook';

import './style.css';

export const Todo = () => {
  const [todoText, setTodoText] = useState("");

  const cookies = useCookies(['incompleteTodos','completeTodos']);
  const getCookieIncompleteTodos = cookies.incompleteTodos ? cookies.incompleteTodos.split(','):[];
  const [incompleteTodos, setIncompleteTodos] = useState(getCookieIncompleteTodos);

  const getCookieCompleteTodos = cookies.completeTodos ? cookies.completeTodos.split(','):[];
  const [completeTodos, setCompleteTodos] = useState(getCookieCompleteTodos);

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

  return (
    <>
      <h1 style={{ textAlign: "center" }}><img src="192x192.png" alt="TODO" /></h1>
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
      <SendWebhook
        completeTodos={completeTodos}
        incompleteTodos={incompleteTodos}
        setIncompleteTodos={setIncompleteTodos}
        setCompleteTodos={setCompleteTodos} />
      <footer>
        <p>
          作成者<br />とぴ <a href="https://twitter.com/topi_log" target='_blank' rel="noreferrer">X</a> <a href="https://github.com/Kanae-Nishina/react-practice-todoapp" target='_blank' rel="noreferrer">Github</a></p>
        <p>
          参考<br /><a href="https://www.udemy.com/course/modern_javascipt_react_beginner/" target='_blank' rel="noreferrer">【最新ver対応済】<br />モダンJavaScriptの基礎から始める挫折しないためのReact入門</a></p>
      </footer>
    </>
  );
}
