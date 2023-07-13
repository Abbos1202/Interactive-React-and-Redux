import React from "react";
import ReactDOM from "react-dom";

const cars = [
  {
    id: 1,
    carName: "Malibu",
    carPrice: 30000,
  },
  {
    id: 2,
    carName: "Gentra",
    carPrice: 25000,
  },
  {
    id: 3,
    carName: "Tracker",
    carPrice: 28000,
  },
  {
    id: 4,
    carName: "Nexia 3",
    carPrice: 10000,
  },
  {
    id: 5,
    carName: "Equinox",
    carPrice: 35000,
  },
  {
    id: 6,
    carName: "Captiva",
    carPrice: 28000,
  },
];

ReactDOM.render(
  <div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <table className="table table-light table-hover">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Car Name</th>
                <th>Car Price</th>
              </tr>
            </thead>

            <tbody>
              {cars.map((value) => {
                return (
                  <tr key={value.id}>
                    <td>{value.id}</td>
                    <td>{value.carName}</td>
                    <td>{value.carPrice}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>,
  document.getElementById("root")
);
