import './App.css';
import axios from 'axios';
import Items from './components/items';
import { useEffect, useState } from 'react';
import logo from './fortnite-logo.svg';
import "bulma/css/bulma.min.css";
import Pagination from './components/pagination';
import SearchBar from './components/SearchBar';



const API_URL = 'https://fortnite-item-shop-be-ed2ec5543cb7.herokuapp.com/api/v1/item_shop';
const PLAYER_STATS_URL = 'https://fortnite-item-shop-be-ed2ec5543cb7.herokuapp.com/api/v1/stats';

function getAPIData() {
  return axios.get(API_URL).then(response => response.data.data);
}

function getPlayerStats(playerName) {
  return axios.get(`${PLAYER_STATS_URL}?name=${playerName}`).then(response => response.data.data);
}

function App() {
  const [items, setItems] = useState([]);
  const [date, setDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [playerStats, setPlayerStats] = useState(null);


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

  
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = Math.min(indexOfFirstItem + itemsPerPage, items.length);
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  
  const handleSearch = (query) => {
    getPlayerStats(query).then(stats => {
      setPlayerStats(stats);
    })
  };
  
  const handleClose = () => {
    setPlayerStats(null);
  };


  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} alt="Logo"/>
      <SearchBar onSearch={handleSearch} />
        {playerStats && (
          <div className="player-stats">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">{playerStats.attributes.name}</p>
              <button className="delete button is-danger" aria-label="close" onClick={handleClose}></button>
              </header>             
            <div class="card-content">
              <div class="content">
                <p>Battle Pass Level: {playerStats.attributes.battle_pass_level}</p>
                <p>Battle Pass Progress: {playerStats.attributes.battle_pass_progress}</p>
                <details>
                  <summary>Overall Stats</summary>
                  <div class="card">
                    <div class="card-content">
                      <div class="content">
                        <p>Overall Score: {playerStats.attributes.overall.score}</p>
                        <p>Overall Score Per Min: {playerStats.attributes.overall.scorePerMin}</p>
                        <p>Overall Score Per Match: {playerStats.attributes.overall.scorePerMatch}</p>
                        <p>Wins: {playerStats.attributes.overall.wins}</p>
                        <p>Top 3: {playerStats.attributes.overall.top3}</p>
                        <p>Top 5: {playerStats.attributes.overall.top5}</p>
                        <p>Top 6:{playerStats.attributes.overall.top6}</p>
                        <p>Top 10: {playerStats.attributes.overall.top10}</p>
                        <p>Top 12: {playerStats.attributes.overall.top12}</p>
                        <p>Top 25:{playerStats.attributes.overall.top25}</p>
                        <p>Kills: {playerStats.attributes.overall.kills}</p>
                        <p>Kills Per Min: {playerStats.attributes.overall.killsPerMin}</p>
                        <p>Kills Per Match: {playerStats.attributes.overall.killsPerMatch}</p>
                        <p>Deaths: {playerStats.attributes.overall.deaths}</p>
                        <p>K/D: {playerStats.attributes.overall.kd}</p>
                        <p>Matches: {playerStats.attributes.overall.matches}</p>
                        <p>Win Rate: {playerStats.attributes.overall.winRate}</p>
                        <p>Minutes Played: {playerStats.attributes.overall.minutesPlayed}</p>
                        <p>Players Out-lived: {playerStats.attributes.overall.playersOutlived}</p>
                        <p>Last Updated: {playerStats.attributes.overall.lastModified}</p>
                      </div>
                    </div>
                  </div>
                </details>
                <details>
                  <summary>Solo Stats</summary>
                  <div class="card">
                    <div class="card-content">
                      <div class="content">
                        <p>Solo Score: {playerStats.attributes.solo.score}</p>
                        <p>Solo Score Per Min: {playerStats.attributes.solo.scorePerMin}</p>
                        <p>Solo Score Per Match: {playerStats.attributes.solo.scorePerMatch}</p>
                        <p>Wins: {playerStats.attributes.solo.wins}</p>
                        <p>Top 3: {playerStats.attributes.solo.top3}</p>
                        <p>Top 5: {playerStats.attributes.solo.top5}</p>
                        <p>Top 6:{playerStats.attributes.solo.top6}</p>
                        <p>Top 10: {playerStats.attributes.solo.top10}</p>
                        <p>Top 12: {playerStats.attributes.solo.top12}</p>
                        <p>Top 25:{playerStats.attributes.solo.top25}</p>
                        <p>Kills: {playerStats.attributes.solo.kills}</p>
                        <p>Kills Per Min: {playerStats.attributes.solo.killsPerMin}</p>
                        <p>Kills Per Match: {playerStats.attributes.solo.killsPerMatch}</p>
                        <p>Deaths: {playerStats.attributes.solo.deaths}</p>
                        <p>K/D: {playerStats.attributes.solo.kd}</p>
                        <p>Matches: {playerStats.attributes.solo.matches}</p>
                        <p>Win Rate: {playerStats.attributes.solo.winRate}</p>
                        <p>Minutes Played: {playerStats.attributes.solo.minutesPlayed}</p>
                        <p>Players Out-lived: {playerStats.attributes.solo.playersOutlived}</p>
                        <p>Last Updated: {playerStats.attributes.solo.lastModified}</p>
                      </div>
                    </div>
                  </div>
                </details>
                <details>
                  <summary>Duo Stats</summary>
                  <div class="card">
                    <div class="card-content">
                      <div class="content">
                        <p>Duo Score: {playerStats.attributes.duo.score}</p>
                        <p>Duo Score Per Min: {playerStats.attributes.duo.scorePerMin}</p>
                        <p>Duo Score Per Match: {playerStats.attributes.duo.scorePerMatch}</p>
                        <p>Wins: {playerStats.attributes.duo.wins}</p>
                        <p>Top 3: {playerStats.attributes.duo.top3}</p>
                        <p>Top 5: {playerStats.attributes.duo.top5}</p>
                        <p>Top 6:{playerStats.attributes.duo.top6}</p>
                        <p>Top 10: {playerStats.attributes.duo.top10}</p>
                        <p>Top 12: {playerStats.attributes.duo.top12}</p>
                        <p>Top 25:{playerStats.attributes.duo.top25}</p>
                        <p>Kills: {playerStats.attributes.duo.kills}</p>
                        <p>Kills Per Min: {playerStats.attributes.duo.killsPerMin}</p>
                        <p>Kills Per Match: {playerStats.attributes.duo.killsPerMatch}</p>
                        <p>Deaths: {playerStats.attributes.duo.deaths}</p>
                        <p>K/D: {playerStats.attributes.duo.kd}</p>
                        <p>Matches: {playerStats.attributes.duo.matches}</p>
                        <p>Win Rate: {playerStats.attributes.duo.winRate}</p>
                        <p>Minutes Played: {playerStats.attributes.duo.minutesPlayed}</p>
                        <p>Players Out-lived: {playerStats.attributes.duo.playersOutlived}</p>
                        <p>Last Updated: {playerStats.attributes.duo.lastModified}</p>
                      </div>
                    </div>
                  </div>
                </details>
                <details>
                  <summary>Squad Stats</summary>
                  <div class="card">
                    <div class="card-content">
                      <div class="content">
                        <p>Squad Score: {playerStats.attributes.squad.score}</p>
                        <p>Squad Score Per Min: {playerStats.attributes.squad.scorePerMin}</p>
                        <p>Squad Score Per Match: {playerStats.attributes.squad.scorePerMatch}</p>
                        <p>Wins: {playerStats.attributes.squad.wins}</p>
                        <p>Top 3: {playerStats.attributes.squad.top3}</p>
                        <p>Top 5: {playerStats.attributes.squad.top5}</p>
                        <p>Top 6:{playerStats.attributes.squad.top6}</p>
                        <p>Top 10: {playerStats.attributes.squad.top10}</p>
                        <p>Top 12: {playerStats.attributes.squad.top12}</p>
                        <p>Top 25:{playerStats.attributes.squad.top25}</p>
                        <p>Kills: {playerStats.attributes.squad.kills}</p>
                        <p>Kills Per Min: {playerStats.attributes.squad.killsPerMin}</p>
                        <p>Kills Per Match: {playerStats.attributes.squad.killsPerMatch}</p>
                        <p>Deaths: {playerStats.attributes.squad.deaths}</p>
                        <p>K/D: {playerStats.attributes.squad.kd}</p>
                        <p>Matches: {playerStats.attributes.squad.matches}</p>
                        <p>Win Rate: {playerStats.attributes.squad.winRate}</p>
                        <p>Minutes Played: {playerStats.attributes.squad.minutesPlayed}</p>
                        <p>Players Out-lived: {playerStats.attributes.squad.playersOutlived}</p>
                        <p>Last Updated: {playerStats.attributes.squad.lastModified}</p>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
        )}
      <div class="box">{date && <p className="date">{date}</p>}</div>
      <Items items={currentItems} />      
      <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={items.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </header>
    </div>
  );
}

export default App;
