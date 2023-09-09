
import './App.css';
import WeatherDisplay from './Components/WeatherDisplay';
import LoginForm from './Components/LogInForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Weather App</h1>
      </header>
      <main>
        <div className="App-container">
          <LoginForm />
        </div>
      </main>
      <footer className="App-footer">
        <p className="copyright">Copyright © 2023 Haritha Ganegoda</p>
      </footer>
    </div>
  );
}

export default App;
