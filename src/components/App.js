import React from 'react';
import Props from './Props';


const App = () => {
  return (
    <div>
      <h1>Modern Best Movies</h1>
      <div className='card'>
        <Props
          img="https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
          name="Inception"
          liked="88% liked"
          produced="July 8, 2010"
        />
        <Props
          img="https://resizing.flixster.com/fNxvS6Xi8aXoc-gWa1hYnitp0jE=/206x305/v2/https://flxt.tmsimg.com/NowShowing/61211/61211_aa.jpg"
          name="No Country for Old Men"
          liked="86% liked"
          produced="November 9, 2007"
        />
        <Props
          img="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSdzSE7YateHtZV7CYhJ_7MG348BLmWSnYAADU6pz4E8dtLgCZM"
          name="Mad Max: Fury Road"
          liked="90% liked"
          produced="May 14, 2015"
        />
        <Props
          img="https://upload.wikimedia.org/wikipedia/en/f/f6/Gravity_Poster.jpg"
          name="Gravity"
          liked="79% liked"
          produced="October 4, 2013"
        />
        <Props
          img="https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png"
          name="Gladiator"
          liked="90% liked"
          produced="May 5, 2000"
        />
        <Props
          img="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRU2QCY4Gt-o6BFV1SQy9jmewsG2SH47ODClkW4PIPVUauLDC5M"
          name="Pan's Labyrinth"
          liked="91% liked"
          produced="October 11, 2006"
        />
      </div>
    </div>
  )
}

export default App;
