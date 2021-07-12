import PageHeader from "../components/pageHeader";
import Slider from "../components/slider";
import { useState, useEffect } from "react";
import Req from "../tools/request";
import Section from "../components/section";
const Home = () => {
  const [topReated, setTopReated] = useState();
  const [upcoming, setUpcoming] = useState();
  const [popular, setPopular] = useState();
  useEffect(() => {
    Req("movie/top_rated").then((e) => {
      setTopReated(e);
    });
    Req("movie/upcoming").then((e) => {
      setUpcoming(e);
    });
    Req("movie/popular").then((e) => {
      setPopular(e);
    });
  }, []);

  return (
    <>
      <PageHeader />
      <Slider movies={popular} />
      <div className="sections">
        <div className="container">
          {!!topReated ? (
            <Section movies={topReated} title={"Top Reated"} />
          ) : (
            ""
          )}
          {!!upcoming ? <Section movies={upcoming} title={"Upcoming"} /> : ""}
          {!!popular ? <Section movies={popular} title={"Popular"} /> : ""}
        </div>
      </div>
    </>
  );
};

export default Home;
