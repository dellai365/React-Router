import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Info from './Info';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './MovieList';


function App() {
  const [Movies, setMovies] = useState([{ name: "Fury", description: "A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April, 1945.", rating: "7.6", photo: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f839d236fbd156a40c07312391b8a5e8c9aceac75204db3433248959ac2ca571._RI_V_TTW_.jpg',embedId:"DNHuK1rteF4" },

  { name: "Mad Max: Fury Road", description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.", rating: "8.2", photo: 'https://resize-media.festival-cannes.com/fit-in/2560x1103/film_film/0002/13/e37aaa403d41429e45eec949eddbb1e26bbb0c3b.jpeg',embedId:"hEJnMQG9ev8" },
  { name: "San Andreas", description: "In the aftermath of a massive earthquake in California, a rescue-chopper pilot makes a dangerous journey with his ex-wife across the state in order to rescue his daughter.", rating: "6.2", photo: 'https://fr.web.img2.acsta.net/pictures/15/04/23/15/38/341525.jpg',embedId:"yftHosO0eUo" }]);




  return (
    <div className="App" >

      <Router>
        <Switch>
          <Route path="/" exact >

          <MovieList list={Movies} update={(movie) => setMovies(movie)} />

          </Route>

          <Route path="/Info/:name" exact>
            <Info all={Movies}  />
          </Route>

        

        </Switch>
        

          
        





      </Router>
    </div >
  );
}

export default App;
