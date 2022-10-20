import "./styles.css";

const handleClick = () => {
  console.log("クリック");
};

const SampleButton = () => {
  return <input type="button" value="ボタン" onClick={handleClick} />;
};

export default function App() {
  return <SampleButton />;
}
