// 疑似要素はjsxで表現できないのでそこだけcssからインポートする
import '../style.css'

const style = {
  backgroundColor: "#c6e5d9",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
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