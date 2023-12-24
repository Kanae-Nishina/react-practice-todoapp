import { useState } from "react";

const areaStyle = {
  border: "2px solid rgb(146, 146, 221)",
  backgroundColor: "rgb(204, 204, 235)",
  borderRadius: "8px",
  width: "400px",
  maxWidth: "100%",
  padding: "8px",
  margin: "8px auto"
};

export const SendWebhook = (props) => {
  const {completeTodos,incompleteTodos} = props;
  const [headingText, setHeadingText] = useState("");
  const [heading, setHeading] = useState("#");
  const [webhookUrl, setWebhookUrl] = useState("");
  const [beforeComment,setBeforeComment] = useState("");
  const [afterComment,setAfterComment] = useState("");

  const onChangeHeadingText = (event) => setHeadingText(event.target.value);

  const onChangeHeading = (event) => setHeading(event.target.value);

  const onChangeWebhookUrl = (event) => setWebhookUrl(event.target.value);

  const onChangeBeforeComment = (event) => setBeforeComment(event.target.value);

  const onChangeAfterComment = (event) => setAfterComment(event.target.value);

  const onClickSend = async () => {
    if(completeTodos.length === 0 && incompleteTodos.length === 0 || webhookUrl.length === 0) return;

    let msg = `${beforeComment}\n${heading} ${headingText}\n`;
    completeTodos.forEach((todo) => {
      msg += `- [x] ${todo}\n`;
    });
    incompleteTodos.forEach((todo) => {
      msg += `- [ ] ${todo}\n`;
    });

    msg += `\n${afterComment}\n`;

    const location = window.location;
    const url = location.protocol + "//" + location.hostname + ":5000";

    await fetch(url,{
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({url: webhookUrl,text: msg}),
    })
      .then((res) => res.json())
      .then((data)=> console.log(data));
  };
  return (
    <div style = {areaStyle}>
        <h4 className="title">Webhook</h4>
        <textarea placeholder="前書きを入力" value={beforeComment} onChange={onChangeBeforeComment} />
        <select onChange={onChangeHeading}>
          <option value="#">見出し１</option>
          <option value="##">見出し２</option>
          <option value="###">見出し３</option>
          <option value="###">見出し４</option>
        </select>
        <input
          className='input-area blue' placeholder="見出し"
          value = {headingText}
          onChange={onChangeHeadingText} />
        <textarea placeholder="後書きを入力" value={afterComment} onChange={onChangeAfterComment} />
        <pre style = {{backgroundColor: "white",padding: "8px 16px",margin:"8px auto"}}>
          <p>{beforeComment}</p>
          <p>{heading} {headingText}</p>
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
          <p>{afterComment}</p>
        </pre>
        <input className='input-area blue mg-left-0' placeholder='Webhookを入力' type="url"
          value={webhookUrl} onChange={onChangeWebhookUrl}/>
        <button className="blue" onClick={()=> onClickSend()}>送信</button>
        <p>確認用：{webhookUrl}</p>
    </div>
  );
};