import React from "react";
import ReactDOM from "react-dom";

const color = "blue"

ReactDOM.render(
  <div>
    <h1 style={{color: "red", background: "yellow"}}>Welcome to our hub!</h1>
    <p style={{color: color, background: "coral"}}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste provident
      alias explicabo consequatur. Sint, possimus!
    </p>
  </div>,
  document.getElementById("root")
);

// let numbers = [4, 5, 6]

// ReactDOM.render(
//     <div>
//         <p>{numbers}</p>
//         <p>{numbers.join(" , ")}</p>
//         <p>{numbers.map(number => number + (" / "))}</p>
//     </div>,
//     document.getElementById("root")
// )

// let number = 4;

// ReactDOM.render(
//     <div>{number * 10}</div>,
//     document.getElementById("root")
// )

// const user = {
//     name: "Angela",
//     city: "California",
// }

// ReactDOM.render(
//     <div>
//         <h2>Name: {user.name}</h2>
//         <h2>City: {user.city}</h2>
//     </div>
//     ,document.getElementById("root"))

// const firstName = "Abbos";
// const lastName = "Ibrohimov";

// ReactDOM.render(
//   <div className="container">
//     <p><b>Name:</b> {firstName}</p>
//     <p><b>Surname:</b> {lastName}</p>
//   </div>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//     React.createElement("div", {className: "container"},
//     React.createElement("h1", {}, "Qalaysan"),
//     React.createElement("div", {className: "box"},
//     React.createElement("p", {}, "Yaxshi o'zing yaxshimisan"))),
//     document.getElementById("root")

// )
