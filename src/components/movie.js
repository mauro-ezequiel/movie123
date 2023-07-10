import movie from '../movie.json';
import Card from './card';
import style from '../style/movie.module.css'

function Movie () {
    console.log (style)
    console.log(movie)

    return (
        <ul className={style.grid}>
            {movie.map ((movie)=> (
            <Card key={movie.id} movie={movie}/>
            ))}
        </ul>
    );
    
}

export default Movie;