import { Routes, Route } from "react-router-dom";
import './App.css';

const HomePage = () => {
  return (
    <div>
      <h1>This is the home page</h1>
    </div>
  );
}

const MoviePage = () => {
  return (
    <div>
      <h1>
        This is the movie page
      </h1>
    </div>
  );
}


function App() {
  return (
    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="/movies" Component={MoviePage}/>
    </Routes>
  );
}

export default App;
