import NavigationBar from './NavigationBar';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import Cooperative from './Cooperative';
import NotFound from './NotFound';
import {Route, Switch, useLocation} from 'react-router-dom';
import { AnimatePresence} from 'framer-motion';
function App() {
  const location = useLocation();
  return (
      <div className="App">
        <div className="content">
          <NavigationBar />
          <AnimatePresence>
            <Switch location ={location} key = {location.key}>
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
            </AnimatePresence>
        </div>
      </div>
  );
}

export default App;
