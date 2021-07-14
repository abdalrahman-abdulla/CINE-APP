import { useState } from "react";
const Slider = ({ movies }) => {
  const [index, setIndex] = useState(0);
  return (
    <>
      {!!movies ? (
        <div className="slider" key={index}>
          <img
            src={
              "http://image.tmdb.org/t/p/original/" +
              movies[index].backdrop_path
            }
            alt=""
            className="image-cover"
          />
          <div className="overlay"></div>
          <div className="container">
            <div className="movie">
              <h2>{movies[index].title}</h2>
              <p className="date">{movies[index].release_date}</p>
              <p className="popularity">{movies[index].popularity}</p>
              <p className="play">
                <img src="./img/PLAY.svg" alt="" />
                Show trailer
              </p>
            </div>
            <div className="slide">
              <button
                onClick={() =>
                  index > 1 ? setIndex(index - 1) : setIndex(movies.length - 1)
                }
              >
                {"<"}
              </button>

              <span>
                {" "}
                {index + 1} / {!!movies ? movies.length : 0}{" "}
              </span>
              <button
                onClick={() =>
                  index < movies.length - 1 ? setIndex(index + 1) : setIndex(0)
                }
              >
                {">"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Slider;
