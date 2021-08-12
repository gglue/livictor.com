import NavigationBar from './NavigationBar';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import Cooperative from './Cooperative';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {

  return (
    <Router>
      <div className="App">
        <div className="content">
          <NavigationBar />
          <Switch>
            <Route exact path="/">
              <Home /> 
            </Route>
            <Route path ="/contact">
              <Contact />
            </Route>
            <Route path ="/projects">
              <Projects />
            </Route>
            <Route path = "/cooperative">
              <Cooperative />
            </Route>
            <Route path ="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
