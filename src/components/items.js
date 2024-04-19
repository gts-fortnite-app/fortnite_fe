import React from 'react';

function Items(props) {
  console.log(props.items);
  return (
    <div className="columns is-multiline">
      {Array.isArray(props.items) ? (
        props.items.map((item, index) => (
          <div key={`${item.id}_${index}`} className="column is-one-third">
            <div className="card">
              <div className="card-content">
                <p className="title">{item.attributes.name}</p>
                <div className="content">
                  <img src={item.attributes.vbuck_icon} alt="VBuck Icon" className="vbuck-icon" style={{ width: '30px', height: 'auto' }} />
                  <p className="item-text">{item.attributes.final_price}</p>
                </div>
              </div>
              <footer className="card-footer">
                <p className="card-footer-item">
                  <span>
                    <img src={item.attributes.image} alt={item.attributes.name} title={item.attributes.name} />
                  </span>
                </p>
              </footer>
            </div>
          </div>
        ))
      ) : (
        <p>No items available</p>
      )}
    </div>
  );
}

export default Items;
