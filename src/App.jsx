import './App.css';
import Left from './component/LeftSection/Left';
import Right from './component/RightSection/Right';

const App = () => {
  return (
    <div className='container'>
      <Left />
      <Right />
    </div>
  );
}

export default App;