function RaceResultCard({ result }) {
    return (
        
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Position: {result.position}</h5>
          <p className="card-text">Name:<a href={result.Driver.url} target="_blank" rel="noreferrer"> {result.Driver.givenName} {result.Driver.familyName} (<b>{result.Driver.code}</b>)</a></p>
          <p className="card-text">Number {result.Driver.permanentNumber}</p>
          <p className="card-text">Nationality: {result.Driver.nationality}</p>
          <p className="card-text">Constructor:<a href={result.Constructor.url} target="_blank" rel="noreferrer"> {result.Constructor.name}</a></p>
          {result.Time && <p className="card-text">Time: {result.Time.time}</p>}
          <p className="card-text">Laps: {result.laps}</p>
          <p className="card-text">Grid: {result.grid}</p>
          {result.FastestLap && (
            <>
              <p className="card-text">Fastest Lap: {result.FastestLap.Time.time}</p>
              <p className="card-text">Average Speed: {result.FastestLap.AverageSpeed.speed} {result.FastestLap.AverageSpeed.units}</p>
            </>
          )}
          {!result.FastestLap && <p className="card-text">Fastest Lap: Not available</p>}
        

        </div>
      </div>
    );
  }
  
  export default RaceResultCard;
  