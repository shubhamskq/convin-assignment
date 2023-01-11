import React, { useState } from "react";

function App(){
  const [cards] = useState([
    {
      title: 'Card-1',
      text: 'mp3'
    },
    {
      title: 'Card-2',
      text: 'mp3'
    },
    {
      title: 'Card-3',
      text: 'mp3'
    },
    {
      title: 'Card-4',
      text: 'mp3'
    },
    {
      title: 'Card-5',
      text: 'mp3'
    },
    {
      title: 'Card-6',
      text: 'mp3'
    },
  ]) 
  return (
    <div>
      <section>
        <div className="container">
          <h1>Convin Frontend Assignment</h1>
          <div className="cards">
            {
              cards.map((card, i) => (    
            <div key={i} className="card">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <button className="btn" >Add link</button>
            </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
   )
}

export default App;