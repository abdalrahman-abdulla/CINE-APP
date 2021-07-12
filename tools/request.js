const Req = async (url, page = 1, query = null) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  return await fetch(
    `https://api.themoviedb.org/3/${url}?api_key=d3fa6ce73b5b81b8af1e2afc5c5d5ee3&page=${page}&query=${query}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result.results)
    .catch((error) => console.log("error", error));
};
export default Req;
