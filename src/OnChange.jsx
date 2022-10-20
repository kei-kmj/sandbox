const handleChange = (e) => {
  console.log(e.target.value);
};

const SampleIputText = () => {
  return <input type="text" defaultValue="" onChange={handleChange} />;
};

export default function App() {
  return <SampleIputText />;
}
