const style = {
  backgroundColor: "#c6e5d9",
  width: "400px",
  maxWidth: "100%",
  height: "43px",
  padding: "8px",
  margin: "8px auto",
  borderRadius: "8px"
}

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;

  return (
    <div style = {style}>
      <input className='input-area' placeholder='TODOを入力' value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};