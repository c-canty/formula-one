import ResultList from './components/resultList'; // Import the LastRaceInfo component

function App() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-1"> </div>           
          <div class="col-md-10 text-center">
            <h1 className="title is-2">A very unofficial F1 database</h1>
            <ResultList /> {/* Render the LastRaceInfo component */}
          </div>
          <div class="col-md-1"> </div>
          </div>
      </div>
    );
  }
  export default App;
  