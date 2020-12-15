// import logo from '../logo.svg';
import '../App.css';
import SearchBar from '../containers/Search_bar';
import WeatherList from '../containers/weather_list';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <WeatherList />
     </div>
  );
}

export default App;
