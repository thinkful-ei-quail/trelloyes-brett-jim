import React from 'react';
import Card from './Card.js';

import './List.css';

class List extends React.Component {
 

  render() {

    const cardMap = this.props.cards.map(card => <Card title={card.title} content={card.content} />);

    return (
      <section className="List">
        <header className="List-header">
          <h2>{this.props.header}</h2>
        </header>
        <div className="List-cards">
          {cardMap}
          <button type="button" className="List-add-button">
              + Add Random Card
          </button>
        </div>
      </section>
    )
  }
}

export default List;
/*
{
  "items": [
    { "id": "abc123", "name": "Foo" },
    { "id": "def456", "name": "Bar" },
    { "id": "ghi789", "name": "Herp" },
    { "id": "jkl012", "name": "Derp" }
  ]
}

const arrayOfLis = apiResponse.items.map((item) =>
  <li key={item.id}>
    {item.name}
  </li>
)
return (
  <ul>
    {arrayOfLis}
  </ul>

*/