import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { useQuery } from 'react-query';

function App() {
  const [count, setCount] = useState(0);
  const { isLoading, error, data } = useQuery('todos', () =>
    fetch('http://localhost:3000').then((res) => res.json())
  );
  console.log(data);
  return (
    <div className='App'>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          {' '}
          <div>
            <a href='https://vitejs.dev' target='_blank'>
              <img src='/vite.svg' className='logo' alt='Vite logo' />
            </a>
            <a href='https://reactjs.org' target='_blank'>
              <img src={reactLogo} className='logo react' alt='React logo' />
            </a>
          </div>
          <h1>{error ? 'error' : data.msg}</h1>
          <div className='card'>
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className='read-the-docs'>
            Click on the Vite and React logos to learn more
          </p>
        </>
      )}
    </div>
  );
}

export default App;
