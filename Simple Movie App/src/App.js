// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Movie from './Components/Movie';
import movies from './movie.json';

function App() {
  let x = true
  if (x == true) {
    return <Header />
  }

  return (
    <div className="App">
      <Header />
      <div className='main'>
        {
          movies.map((element) => {
            return (
              <Movie
                title={element.Title}
                year={element.Year}
                img={element.Poster}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
