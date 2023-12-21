import { useState } from 'react';
import './style.css';

export const Todo = () => {
  const [incompleteTodos, setIncompoleteTodos] = useState(["TODOです１", "TODOです２"]);
  const [completeTodos, setCompoleteTodos] = useState(["TODOでした１", "TODOでした２"]);
  return (
    <>
      <div className='input-area'>
        <input placeholder='TODOを入力' />
        <button>追加</button>
      </div>
      <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => (
            <li key={todo}>
              <div className='list-row'>
                <p className='todo-item'>{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          )
          )}
        </ul>
      </div>
      <div className='complete-area'>
        <p className='title'>完了のTODO</p>
        <ul>
          {completeTodos.map((todo)=> (
            <li>
              <div className='list-row'>
                <p className='todo-item'>{todo}</p>
                <button>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
