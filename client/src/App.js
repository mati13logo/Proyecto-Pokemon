import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './Components/Landing/LandingPage.js';
import Home from './Components/Home/Home.js';
import Details from './Components/Details/Details.js'
import Form from './Components/Form/Form.js'



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/home/:id' component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
