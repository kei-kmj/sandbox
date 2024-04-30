import {useState} from 'react'
import './App.css'

export const App = () => {
  const [status, setStatus] = useState('未開始');
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [results, setResults] = useState([]);

  const testStorageLimit = () => {
    const testString = 'a'.repeat(1024); // 1KBのテストデータ
    let i = 0;
    setStartTime(performance.now());

    const intervalId = setInterval(() => {
      try {
        localStorage.setItem(`testKey${i}`, testString);
        i++;
      } catch (e) {
        clearInterval(intervalId); // ループを終了
        if (e.name === 'QuotaExceededError') {
          setEndTime(performance.now());
          setStatus(`限界に達しました: ${i} KB`);
          localStorage.clear();
        }
      }
    }, 0);
  };
  const testDataSizes = [1, 10, 100, 1000, 5000]; // KBで指定
  const performTest = async () => {
    const newResults = [];

    for (const size of testDataSizes) {
      const data = new Array(size * 1024).fill('a').join('');
      const key = `testData-${size}KB`;
      const startTime = performance.now();

      try {
        localStorage.setItem(key, data);
        const endTime = performance.now();
        const timeTaken = (endTime - startTime).toFixed(2);
        newResults.push(`${size}KB: ${timeTaken} ms`);
      } catch (e) {
        newResults.push(`${size}KB: Error storing data`);
      }

      localStorage.removeItem(key);
    }
    setResults(newResults)
  }

  return (
    <>
      <div>
        <button onClick={testStorageLimit}>ストレージ限界テスト開始</button>
        <div>ステータス: {status}</div>
        {endTime > 0 && (
          <div>所要時間: {(endTime - startTime).toFixed(2)} ミリ秒</div>
        )}
      </div>
      <div>
        <button onClick={performTest}>パフォーマンステスト開始</button>
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
