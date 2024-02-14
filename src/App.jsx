import './App.css'
import Left from './component/LeftSection/Left'
import Right from './component/RightSection/Right'
import FullScreen from './component/FullScreenSection/FullScreen'
import { useContext } from 'react'
import { Context } from './Provider'

const App = () => {
  const { showMedia } = useContext(Context);

  return (
    <div className='container'>
      <Left />
      <Right />
      {showMedia && <FullScreen />}
    </div>
  );
}

export default App;