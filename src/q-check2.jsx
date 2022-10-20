import "./styles.css";
import React, { useState } from "react";

const InputCheckBox = () => {
  const [checkedValue, setCheckedValue] = useState(false);

  const handleChange = (e) => {
    if (checkedValue) {
      setCheckedValue(checkedValue !== e.target.value);
    } else {
      setCheckedValue(e.target.value);
    }
  };
  return (
    <div className="App">
      <label>
        <input
          type="checkbox"
          value="true"
          onChange={handleChange}
          checked={checkedValue === "true"}
        />
        復習する
      </label>
      <p>{checkedValue}</p>
    </div>
  );
};

export default function App() {
  return <InputCheckBox />;
}
