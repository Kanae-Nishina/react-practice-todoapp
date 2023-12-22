import React from 'react';
import ReactDOM from 'react-dom/client';
import { Todo }  from './Todo.jsx';
import reportWebVitals from './reportWebVitals.js';
// import http from ' http';
// import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const postData = async() =>{
//   const url = '';
//   return await axios.post(url,{ text:""});
// }

// const handler = (req,res) => {
//   res.writeHead(200, {"Content-Type":"application/json"});
//   postData().then((data)=>{
//     let resData = "通信成功！";
//     res.end(resData);
//   }).catch(()=>{
//     let resData = "通信失敗…";
//     res.end(resData);
//   })
// };

// const svr = http.createServer(handler);
// console.log("http://localhost:8000");
// svr.listen(8000);