import { useState } from "react";
import { functions } from "../firebase"
import { httpsCallable } from "firebase/functions";
import { useCookies } from 'react-cookie';
import { WebhookModal } from "./WebhookModal";

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
  const { completeTodos, incompleteTodos, setIncompleteTodos, setCompleteTodos,setTodosCookie,removeTodosCookie} = props;
  const [cookies, setCookie,removeCookie] = useCookies(['BeforeComment', 'Heading', 'HeadingText', 'AfterComment', 'WebhookUrl']);
  const [beforeComment, setBeforeComment] = useState(cookies.BeforeComment ?? "");
  const [heading, setHeading] = useState(cookies.Heading ?? "");
  const [headingText, setHeadingText] = useState(cookies.HeadingText ?? "");
  const [afterComment, setAfterComment] = useState(cookies.AfterComment ?? "");
  const [webhookUrl, setWebhookUrl] = useState(cookies.WebhookUrl ?? "");

  const onChangeHeadingText = (event) => setHeadingText(event.target.value);

  const onChangeHeading = (event) => setHeading(event.target.value);

  const onChangeWebhookUrl = (event) => {
    setWebhookUrl(event.target.value);
  };

  const onChangeBeforeComment = (event) => setBeforeComment(event.target.value);

  const onChangeAfterComment = (event) => setAfterComment(event.target.value);

  const sendData = () => {
    if((completeTodos.length === 0 && incompleteTodos.length === 0) || webhookUrl.length === 0){
      alert('TODOかWebhookURLがありません');
      return;
    }
    let msg = `${beforeComment}\n`;
    msg += heading.length > 0 ? heading : "";
    msg += headingText.length > 0 ? headingText + "\n" : "";
    completeTodos.forEach((todo) => {
      msg += `- [x] ${todo}\n`;
    });
    incompleteTodos.forEach((todo) => {
      msg += `- [ ] ${todo}\n`;
    });

    msg += `\n${afterComment}\n`;

    const callFunction = httpsCallable(functions, "sendWebhook");
    try{
      const res = callFunction({ url: webhookUrl, text: msg});
      alert('送信しました!');
      console.log(res);
    } catch(e) {
      alert(`エラーが発生しました\n${e}`);
      console.log(e);
    }
  };

  const onClickSend = async () => {
    await sendData();
  };

  const saveData = () => {
    if(incompleteTodos.length > 0){
      setTodosCookie('incompleteTodos',incompleteTodos.join(','));
    }

    if(completeTodos.length > 0){
      setTodosCookie('completeTodos',completeTodos.join(','));
    }

    setCookie('BeforeComment',beforeComment);
    setCookie('Heading',heading);
    setCookie('HeadingText',headingText);
    setCookie('AfterComment',afterComment);
    setCookie('WebhookUrl',webhookUrl);
    alert('保存しました');
  };

  const removeData = () => {
    setHeadingText("");
    setHeading("#");
    setBeforeComment("");
    setAfterComment("");
    setIncompleteTodos([]);
    setCompleteTodos([]);
    removeCookie('BeforeComment');
    removeCookie('Heading');
    removeCookie('HeadingText');
    removeCookie('AfterComment');
    removeTodosCookie('incompleteTodos');
    removeTodosCookie('completeTodos');
    alert('削除しました');
  };

  const removeWebhookUrl = () =>{
    setWebhookUrl("");
    removeCookie('WebhookUrl');
    alert('削除しました');
  };

  return (
    <div style={areaStyle}>
      <h4 className="title">Webhook</h4>
      <div className="text-right">
        <WebhookModal />
      </div>
      <textarea placeholder="前書きを入力" value={beforeComment} onChange={onChangeBeforeComment} />
      <select onChange={onChangeHeading}>
        <option value="">見出しなし</option>
        <option value="#">見出し１</option>
        <option value="##">見出し２</option>
        <option value="###">見出し３</option>
        <option value="###">見出し４</option>
      </select>
      <input
        className='input-area blue' placeholder="見出し"
        value={headingText}
        onChange={onChangeHeadingText} />
      <textarea placeholder="後書きを入力" value={afterComment} onChange={onChangeAfterComment} />
      <pre style={{ backgroundColor: "white", padding: "8px 16px", margin: "8px auto" }}>
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
        value={webhookUrl} onChange={onChangeWebhookUrl} />
      <button className="blue" onClick={() => onClickSend()}>送信</button>
      <button className="blue" onClick={() => saveData()}>データを保存</button>
      <button className="blue" onClick={() => removeData()}>データを削除</button>
      <button className="blue" onClick={() => removeWebhookUrl()}>Webhookを削除</button>
      <p><small>エラーが発生して送信ができなかった場合、エラー内容がアラートで表示されるかと思いますのでとぴのtimesに送ってくださると助かります！！</small></p>
    </div>
  );
};