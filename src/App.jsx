import './App.css'
import Left from './component/LeftSection/Left'
import Right from './component/RightSection/Right'
import FullScreen from './component/FullScreenSection/FullScreen'

const App = () => {
  return (
    <div className='container'>
      <Left />
      <Right />
      <FullScreen />
    </div>
  );
}

export default App;