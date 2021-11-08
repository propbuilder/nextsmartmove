/**
 * This web app is authored by Amritansh Singh and usage below libraries for development.
 * 
 * --> For reusable UI elements Material UI components.
 * --> Will be leveraging react testing library and Jest to unit test the components.
 * --> Will be using cypress for automation tests.
 * --> Styles will be pure CSS.
 * --> React routers for routing.
 * 
 */
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/home';
import About from './components/aboutMe';
import NotFound from './components/notFound';

function App() {
  return (
    <div className="App">
      Hello there! Welcome to NextSmartMove.
      <Routes>
        <Route path="/" element= {<Home />} exact/>
        <Route path="about" element= {<About />}/>
        <Route path="/*" element= {<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
