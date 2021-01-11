import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import './globals.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact src="/" component={HomePage}/>
      </Switch>
    </Router>
  );
}

export default App;