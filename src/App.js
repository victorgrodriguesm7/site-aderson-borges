import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import './globals.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/sobre" component={AboutPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;