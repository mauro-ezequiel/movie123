import style from '../style/Card.module.css'

function Card ({movie}) {
    console.log (style)
    const imageUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
    return(
    <li className={style.card}>
        <img  className={style.img}src= {imageUrl} alt="movie.title"/>
    <div>
    {movie.title}
    </div>
    </li>
 )
}


export default Card;