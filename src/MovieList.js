import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import AddModal from './AddModal';


function MovieList(props) {

    const [rate, setrate] = useState(false);
    const [name, setname] = useState(false)

    const OrderRate = () => {
        rate ? props.update(props.list.sort((a, b) => b.rating - a.rating)) : props.update(props.list.sort((a, b) => a.rating - b.rating));
    }
    const OrderName = () => {
        name ? props.update(props.list.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))) : props.update(props.list.sort((a, b) => (a.name > b.name) ? -1 : ((b.name > a.name) ? 1 : 0)))
    }


    return (


        < div style={{ padding: '1rem' }}>
            <div style={{ paddingBottom: "1.5em", display: "flex", gap: "1em" }}>
                <AddModal add={(movie) => props.update(movie)} old={props.list} />


            </div>
            <Button style={{ backgroundColor: "whitesmoke" }} variant="warning" onClick={() => { setrate(!rate); OrderRate(); }}>order by rate</Button>
            <Button style={{ backgroundColor: "whitesmoke" }} variant="warning" onClick={() => { setname(!name); OrderName(); }}>order by name</Button>



            <tr>
                {props.list.map(movie => {
                    return (


                        <td style={{ padding: '1rem' }} >
                            <Link to={`/Info/${movie.name}`} style={{ textDecoration: "none", color: "black" }}> <MovieCard name={movie.name}
                                description={movie.description}
                                photo={movie.photo}
                                rating={movie.rating}
                            />
                            </Link>

                        </td>
                    )
                })}
            </tr>

        </div>
    )

}

export default MovieList;
