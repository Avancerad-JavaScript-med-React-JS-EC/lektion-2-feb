import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={ Home } exact />
        <Route path="/about" component={ About } />
        <Route component={ Error } />
      </Switch>
    </div>
  );
}

export default App;
