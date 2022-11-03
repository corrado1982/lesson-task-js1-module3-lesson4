
const API_URL = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat";

async function callUrbanDictionary() {
  const response = await fetch(API_URL);
  const results = await response.json();
  console.log(results);
}
callUrbanDictionary()