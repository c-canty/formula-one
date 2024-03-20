import { useFetchConstructorsQuery } from '../store';

function ConstructorList() {
  const { data, error, isFetching } = useFetchConstructorsQuery();

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error || !data || !data.MRData || !data.MRData.ConstructorTable || !data.MRData.ConstructorTable.Constructors) {
    return <div>Error loading constructors.</div>;
  }

  const constructors = data.MRData.ConstructorTable.Constructors;

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="constructor-list">
            <h2>List of Constructors</h2>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Nationality</th>
                </tr>
              </thead>
              <tbody>
                {constructors.map((constructor, index) => (
                  <tr key={index}>
                    <td>
                      <a href={constructor.url} target="_blank" rel="noopener noreferrer">
                        {constructor.name}
                      </a>
                    </td>
                    <td>{constructor.nationality}</td>
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

export default ConstructorList;
