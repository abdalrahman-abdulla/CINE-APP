import { useState, useEffect } from "react";
import Req from "../tools/request";
const PageHeader = () => {
  const [search, setSearch] = useState("");
  const [resSearch, setResSearch] = useState();
  useEffect(() => {
    if (search) {
      Req("search/movie", 1, search).then((e) => {
        setResSearch(e);
      });
    }
  }, [search]);
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="./img/logo.svg" alt="" />
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Find Move..."
            onKeyUp={(e) => setSearch(e.target.value)}
          />
          <img src="./img/icon.svg" alt="" className="search-img" />
          {search ? (
            <div className="overlay">
              {resSearch?.map((e) => (
                <div className="res" key={e.id}>
                  <div className="head">
                    <img
                      src={`http://image.tmdb.org/t/p/w500/${e.poster_path}`}
                      alt=""
                      width="70px"
                    />
                    <p className="title">{e.title}</p>
                  </div>
                  <div className="desc">{e.overview}</div>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
