import React from 'react';

function Items(props) {
  console.log(props.items);
  return (
    <div className="items-grid">
      {Array.isArray(props.items) ? (
        props.items.map((item) => (
          <div key={item.id} className="item">
            <h2 className="item-text">{item.attributes.name}</h2>
            <p className="item-text">{item.attributes.final_price}</p>
            <img src={item.attributes.image} alt={item.attributes.name} title={item.attributes.name} />
          </div>
        ))
      ) : (
        <p>No items available</p>
      )}
    </div>
  );
}
export default Items;
