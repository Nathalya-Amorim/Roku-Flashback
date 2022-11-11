const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9124b9093amsh36512cd2a39134fp19030fjsnbcf818ca5c12",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
