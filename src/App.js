import './App.css';
import axios from 'axios';
import Items from './components/items';
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3000/api/v1/item_shop';

function getAPIData() {
  return axios.get(API_URL).then(response => response.data.data);
} 

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then(items => {
      if (mounted) {
        setItems(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <h1>Fortnite Item Shop</h1>
      <Items items={items} />
    </div>
  );
}

export default App;
