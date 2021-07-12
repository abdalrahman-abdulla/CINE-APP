const Section = ({ title, movies }) => {
  return (
    <div className="section">
      <div className="title">{title}</div>
      <div className="cards">
        {movies.map((e) => {
          return (
            <div className="card" key={e.id}>
              <img
                src={`http://image.tmdb.org/t/p/w500/${e.poster_path}`}
                alt=""
              />
              <div className="mov-tit">{e.title}</div>
              <div className="overlay">
                <p>{e.overview}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Section;
