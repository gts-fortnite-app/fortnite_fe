import React from 'react';

function Items(props) {
  console.log(props.items);
  return (
    <div className="items-grid">
      {Array.isArray(props.items) ? (
        props.items.map((item) => (
          <div key={item.id} className="item">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.cost}</p>
            {/* Displaying the main image */}
            <img src={item.attributes.image} alt={item.name} />
          </div>
        ))
      ) : (
        <p>No items available</p>
      )}
    </div>
  );
}
export default Items;
