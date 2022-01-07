import './App.css';
import Keyboard from './components/Keyboard';
import Display from './components/Display';

function App() {
  return (
    <div className="calculator">
      <Display />
      <Keyboard />
    </div>
  );
}

export default App;
