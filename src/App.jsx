import Board from './components/Board';

function App() {
  const lists = {
    'list 1': {
      id: 1,
      cards: [
        { title: 'card 1', id: 1 },
        { title: 'card 2', id: 2 },
        { title: 'card 3', id: 3 },
        { title: 'card 4', id: 4 },
      ],
    },
    'list 2': {
      id: 2,
      cards: [
        { title: 'card 5', id: 5 },
        { title: 'card 6', id: 6 },
        { title: 'card 7', id: 7 },
        { title: 'card 8', id: 8 },
      ],
    },
    'list 3': {
      id: 3,
      cards: [
        { title: 'card 9', id: 9 },
        { title: 'card 10', id: 10 },
        { title: 'card 11', id: 11 },
        { title: 'card 12', id: 12 },
      ],
    },
  };

  return (
    <div className="App flex justify-center bg-slate-500 bg-fixed sm:h-screen">
      <Board lists={lists} />
    </div>
  );
}

export default App;
