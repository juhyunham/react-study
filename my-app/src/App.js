import { BrowserRouter as Router } from "react-router-dom";
import Nav from './components/Nav';
import Banner from './components/Banner';
import './App.css';

function App() {
  return (
      <div className="App">
          <Router>
            <Nav />
            <Banner />
          </Router>
      </div>
  );
}

export default App;
