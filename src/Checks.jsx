import "./styles.css";
import React, { useState } from "react";

const values = [
  { id: 1, item: "赤" },
  { id: 2, item: "青" },
  { id: 3, item: "黄" }
];

const CheckBtnItems = ({ onChange, checked }) =>
  values.map((value) => {
    return (
      <label key={value.id}>
        <input
          type="checkbox"
          value={value.item}
          onChange={onChange}
          checked={checked.includes(value.item)}
        />
        {value.item}
      </label>
    );
  });

const InputCheckBox = () => {
  const [checkedValues, setCheckedValues] = useState([]);

  const handleChange = (e) => {
    if (checkedValues.includes(e.target.value)) {
      setCheckedValues(
        checkedValues.filter((checkedValue) => checkedValue !== e.target.value)
      );
    } else {
      setCheckedValues([...checkedValues, e.target.value]);
    }
  };
  return (
    <div className="App">
      <p>
        現在チェックされている値：<b>{checkedValues.join(",")}</b>
      </p>
      <CheckBtnItems onChange={handleChange} checked={checkedValues} />
    </div>
  );
};

export default function App() {
  return <InputCheckBox />;
}
