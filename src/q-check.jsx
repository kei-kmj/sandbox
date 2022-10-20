import "./styles.css";
import React, { useState } from "react";

const InputCheckBox = () => {
  const [checkedValue, setCheckedValue] = useState(true);

  // isVisibleを反転する関数を定義する。
  const handleChange = () => {
    setCheckedValue(!checkedValue);
  };

  return (
    <div className="App">
      <p>
        現在チェックされている値：<b>{checkedValue}</b>
      </p>
      <label>
        <input
          type="checkbox"
          value="true"
          onChange={handleChange}
          checked={checkedValue === "true"}
        />
        復習する
      </label>
    </div>
  );
};

export default function App() {
  return <InputCheckBox />;
}
