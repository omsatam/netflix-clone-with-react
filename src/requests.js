const APIKEY = "18a84d4fe3397bee6bdc50a76442bf70";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `/discover/tv?api_key=${APIKEY}&with_genres=37`,
  fetchComedyMovies: `/discover/tv?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/tv?api_key=${APIKEY}&with_genres=36`,
  fetchRomanceMovies: `/discover/tv?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/tv?api_key=${APIKEY}&with_genres=99`,
};

export default requests;
