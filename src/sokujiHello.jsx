const Hello = () => {
  const isReact = true;

  return !isReact || <p> "Hello, React!" </p>;
  //return <p> {isReact || "Hello"}</p>;
};
export default function App() {
  return <Hello />;
}
