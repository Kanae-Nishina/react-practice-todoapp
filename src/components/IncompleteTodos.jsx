const incompleteArea = {
  border: "2px solid #aacfd0",
  width: "400px",
  maxWidth: "100%",
  minHeight: "200px",
  padding: "8px",
  margin: "8px auto",
  borderRadius: "8px",
  position: "relative"
}

export const IncompleteTodo = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <>
      <div style={incompleteArea}>
        <p className='title'>未完了のTODO</p>
        <ul>
          {todos.map((todo, index) => (
            <li key={todo}>
              <div className='list-row'>
                <p className='todo-item'>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};