import NavigationBar from './NavigationBar';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import NotFound from './NotFound';
import {Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
function App() {
  const location = useLocation();
  return (
      <div className="App">
        <div className="content">
          <NavigationBar />
          <AnimatePresence>
            <Routes location ={location} key = {location.key}>
              <Route exact path="/" element={<Home/>}></Route>
              <Route path ="/contact" element={<Contact/>}></Route>
              <Route path ="/projects" element={<Projects/>}></Route>
              <Route path ="*" element={<NotFound />}></Route>
            </Routes>
            </AnimatePresence>
        </div>
      </div>
  );
}

export default App;
