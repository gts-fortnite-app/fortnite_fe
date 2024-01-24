import React from 'react';

function Items(props) {
  return (
    <div>
      <h1>These Items are updated daily</h1>
      {Array.isArray(props.items) ? (
        props.items.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.cost}</p>
            {/* Displaying the main image */}
            <img src={item.attributes.image1} alt={item.name} />

            {/* Displaying the variant image (if available) */}
            {item.attributes.variants && item.attributes.variants.length > 0 && (
              <img src={item.attributes.variants[0].image} alt={`Variant of ${item.name}`} />
            )}
          </div>
        ))
      ) : (
        <p>No items available</p>
      )}
    </div>
  );
}
export default Items;
