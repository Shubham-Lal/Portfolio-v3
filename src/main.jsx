import ReactDOM from 'react-dom/client'
import Provider from './Provider.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
    <App />
  </Provider>
)
