import './App.css';
import axios from 'axios';
import Items from './components/items';
import { useEffect, useState } from 'react';

// const API_URL = 'https://fortnite-item-shop-be-ed2ec5543cb7.herokuapp.com/api/v1/item_shop';
const API_URL = 'http://localhost:3000/api/v1/item_shop';

function getAPIData() {
  return axios.get(API_URL).then(response => response.data.data);
} 

function App() {
  const [items, setItems] = useState([]);
  const [date, setDate] = useState('');

  useEffect(() => {
    let mounted = true;
    getAPIData().then(items => {
      if (mounted) {
        setItems(items);
        const dateObject = new Date(items[0].attributes.date);
        const readableDate = `${dateObject.toLocaleDateString()} ${dateObject.toLocaleTimeString()}`;
        setDate(readableDate);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <h1>Fortnite Item Shop</h1>
      {date && <p className="date">{date}</p>}
      <Items items={items} />
    </div>
  );
}

export default App;
