import '../css/MovieCard.css'
function Movie_card({movie}){
    function onFavoriteClick(){
        alert("clicked")
    }
    return (
        <div className="Movie_card">
            <div className="Movie_poster">
                <img src={movie.url} alt={movie.title}/>
                <div className="Movie_overlay">
                    <button className="favorite_btn" onClick={onFavoriteClick}>
                        🤍
                    </button>
                </div>
            </div>
            <div className="Movie_info">
                <h3>{movie.title}</h3>
                <p>{movie.date}</p>
            </div>
        </div>
    ) 
}

export default Movie_card