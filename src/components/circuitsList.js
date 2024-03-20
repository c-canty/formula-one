import { useFetchCircuitsQuery } from '../store';

function CircuitList() {
  const { data, error, isFetching } = useFetchCircuitsQuery();

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error || !data || !data.MRData || !data.MRData.CircuitTable || !data.MRData.CircuitTable.Circuits) {
    return <div>Error loading circuits.</div>;
  }

  const circuits = data.MRData.CircuitTable.Circuits;

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="circuit-list">
            <h2>List of Circuits</h2>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                {circuits.map((circuit, index) => (
                  <tr key={index}>
                    <td>
                      <a href={circuit.url} target="_blank" rel="noopener noreferrer">
                        {circuit.circuitName}
                      </a>
                    </td>
                    <td>{circuit.Location.locality}</td>
                    <td>{circuit.Location.country}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CircuitList;
