import { useFetchDriversQuery } from '../store';

function DriverList() {
  const { data, error, isFetching } = useFetchDriversQuery();

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error || !data || !data.MRData || !data.MRData.DriverTable || !data.MRData.DriverTable.Drivers) {
    return <div>Error loading drivers.</div>;
  }

  const drivers = data.MRData.DriverTable.Drivers;

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="driver-list">
            <h2>List of 2024 Main Drivers</h2>
            <br></br>
            <div className="row">
              <div className="col-md-12">
                <p>Click on the driver's name to view more information.</p>
              </div>
            </div>
            <br></br>
            <div className="row justify-content-center"> {/* Center the table within its container */}
              <div className="col-md-12">          
              <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Number</th>
                      <th>Nationality</th>
                      <th>Date of Birth</th>
                    </tr>
                  </thead>
                  <tbody>
                    {drivers.map((driver, index) => (
                      <tr key={index}>
                        <td>
                          <a href={driver.url} target="_blank" rel="noopener noreferrer">
                            {driver.givenName} {driver.familyName}
                          </a>
                        </td>
                        <td>{driver.permanentNumber}</td>
                        <td>{driver.nationality}</td>
                        <td>{driver.dateOfBirth}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverList;
