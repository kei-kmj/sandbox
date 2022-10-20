import "./styles.css";
import React, { useState } from "react";

//{inputTextValue}で入力値を渡す
//フォームと状態管理が必要なので`useState`使う
const InputText = () => {
  //usestate用意する
  //入力中のテキストの状態をとその更新
  const [inputTextValue, setInputTextValue] = useState("");

  //入力ボタンをclickしたときのテキストの状態とその更新
  const [text, setText] = useState("");

  //入力状態を更新するイベントハンドラ
  const handleChange = (e) => setInputTextValue(e.target.value);

  const handleClick = () => {
    setText(inputTextValue);
    setInputTextValue("");
  };

  return (
    <div className="App">
      <h1>Google {text}!</h1>
      <input type="text" value={inputTextValue} onChange={handleChange} />
      <input type="button" value="入力" onClick={handleClick} />
    </div>
  );
};

export default function App() {
  return <InputText />;
}
