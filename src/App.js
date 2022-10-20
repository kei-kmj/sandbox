import "./styles.css";

const Hello = () => {
  const isReact = true;

  return (
    <p>
      {(() => {
        if (isReact) {
          return <button onClick>ログイン</button>;
        } else {
          return <button onClick>ログアウト</button>;
        }
      })()}
    </p>
  );
};

export default function App() {
  return <Hello />;
}
