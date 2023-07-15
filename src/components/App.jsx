import React from "react";
import movie from "./Movie";
import Card from "./Card";

const App = () => {
  return (
    <div>
      <h1 className="heading"> 😎 My Movies</h1>
      <div className="wrapper">
        {movie.map((value, index) => {
          return <Card key={index} name={value.name} imgUrl={value.imgUrl} liked={value.liked} year={value.year} />;
        })}
      </div>
    </div>
  );
};

export default App;
