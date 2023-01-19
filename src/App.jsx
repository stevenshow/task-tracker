import { useState } from 'react';
import './App.css';
import List from './components/List';

function App() {
  const [count, setCount] = useState(0);
  const items = [
    {
      id: 1,
      title: 'card 1',
    },
    {
      id: 2,
      title: 'card 2',
    },
    {
      id: 3,
      title: 'card 3',
    },
  ];
  return (
    <div className="App">
      <List items={items} />
    </div>
  );
}

export default App;
