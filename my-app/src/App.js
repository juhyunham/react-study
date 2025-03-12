import { BrowserRouter as Router } from "react-router-dom";
import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';
import './App.css';
import Footer from './components/Footer';
import requests from './api/request';

function App() {
  return (
      <div className="App">
          <Router>
            <Nav />
            <Banner />
            
            <Row 
              title="Netflix Originals" 
              id="NO"
              fetchUrl={requests.fetchNetflixOriginals}
              isLargeRow
            />
            <Row 
              title="Trending Now" 
              id="TN"
              fetchUrl={requests.fetchTrending}
            />
            <Row 
              title="Top Rated" 
              id="TR"
              fetchUrl={requests.fetchTopRated}
            />
            <Row 
              title="Action Movies" 
              id="AM"
              fetchUrl={requests.fetchActionMoives}
            />
            {/* 
            <Row 
              title="Comedy Movies" 
              id="AM"
              fetchUrl={requests.fetchComedyMovies}
            />
            <Row 
              title="Horror Movies" 
              id="AM"
              fetchUrl={requests.fetchHorrorMovies}
            />
            <Row 
              title="Romance Movies" 
              id="AM"
              fetchUrl={requests.fetchRomanceMovies}
            />
            <Row 
              title="Document Movies" 
              id="AM"
              fetchUrl={requests.fetchDocumentarues}
            /> */}

            <Footer />
          </Router>
      </div>
  );
}

export default App;
