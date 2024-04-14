import { useFetchLastResultsQuery } from '../store';
import RaceResultCard from './raceResultCard';

function ResultList() {
  const { data, error, isFetching } = useFetchLastResultsQuery();

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error || !data || !data.MRData || !data.MRData.RaceTable || !data.MRData.RaceTable.Races) {
    return <div>Error loading last race results.</div>;
  }

  const race = data.MRData.RaceTable.Races[0];
  const results = race.Results;

  return (
    <div className="last-race-info">
      
      <div className="row">
        <div className="col-md-6">
            <br></br>
          <h3>Latest Race: <b>{race.raceName}</b></h3>
          <p>{race.Circuit.circuitName}</p>
          <p>{race.Circuit.Location.locality}, {race.Circuit.Location.country}</p>
          <p>Date: {race.date}</p>
          <p>Time: {race.time} (Z = Zulu time, also known as UTC)</p> {/* Render the 'time' property of the 'time' object */}
        </div>
        <div className="col-md-6">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/WYxll-B5VSQ?si=HcDYgsx6d9L3jbkN&autoplay=1&muted=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>
        
      </div>
      <br></br>
      <div className="row">
        {results.map((result, index) => (
          <div key={index} className="col-lg-3 mb-4">
            <RaceResultCard result={result} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultList;
