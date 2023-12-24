const style = {
  border: "2px solid #aacfd0",
  width: "400px",
  maxWidth: "100%",
  minHeight: "200px",
  padding: "8px",
  margin: "8px auto",
  borderRadius: "8px",
  backgroundColor: "#c9dede"
};

export const CompleteTodos = (props) => {
  const {todos, onClickBack} = props;
  return (
    <div style = {style}>
      <p className='title'>完了のTODO</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className='list-row'>
              <p className='todo-item'>{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};