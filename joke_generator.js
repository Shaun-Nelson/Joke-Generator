const API_ENDPOINT = "https://v2.jokeapi.dev/joke/";
const JOKE_TYPE = "?type=single";
const SAFE_MODE = "?safe-mode";
const ELEMENT_ID = "joke";
const params = ["blacklistFlags=nsfw,racist,sexist,explicit"];

const getJoke = async () => {
  const joke = await fetch(
    API_ENDPOINT + "Any" + JOKE_TYPE + SAFE_MODE + "&" + params.join(",")
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.type == "twopart") {
        let result = data.setup + " " + data.delivery;
        document.getElementById(ELEMENT_ID).innerHTML += result;
      } else {
        document.getElementById(ELEMENT_ID).innerHTML += data.joke;
      }
    });
};

getJoke();
