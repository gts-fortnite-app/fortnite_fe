import './App.css';
import axios from 'axios';
import Items from './components/items';
import { useEffect, useState } from 'react';
import logo from './fortnite-logo.svg';

const API_URL = 'https://fortnite-item-shop-be-ed2ec5543cb7.herokuapp.com/api/v1/item_shop';

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
      <header className="App-header">
      <img src={logo} alt="Logo"/>
      {date && <p className="date">{date}</p>}
      <Items items={items} />
      </header>
    </div>
  );
}

export default App;
