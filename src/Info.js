import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { useParams } from 'react-router'
import YoutubeEmbed from './YoutubeEmbed';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Info = (props) => {

    const { name } = useParams();

    console.log(useParams());
    const rech = props.all.find(movie => movie.name === name);
    console.log(rech);



    return (
        <div  >
            <Link to="/" > <Button > Main page </Button> </Link>
            <div  >

                {rech.name}
                <br />
                <br />
                <br />
                {rech.description}
                <YoutubeEmbed embedId={rech.embedId} />
            </div>
        </div>
    )
}
export default Info;