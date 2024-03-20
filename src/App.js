import ResultList from './components/MostRecentRaceInfo';
import { Routes, Route, Link } from 'react-router-dom';
import CircuitList from './components/circuitsList';
import DriverList from './components/driversList';
import ConstructorList from './components/constructorsList';

function App() {
  return (
    <div className="container-fluid text-center">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">F1 Database</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/drivers" className="nav-link">Drivers</Link>
              </li>
              <li className="nav-item">
                <Link to="/circuits" className="nav-link">Circuits</Link>
              </li>
              <li className="nav-item">
                <Link to="/constructors" className="nav-link">Constructors</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      <Routes>
        <Route path="/" element={<ResultList />} />
        <Route path="/drivers" element={<DriverList />} />
        <Route path="/circuits" element={<CircuitList />} />
        <Route path="/constructors" element={<ConstructorList />} />
      </Routes>
    </div>
  );
}

export default App;
