
const API_URL = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1dd78a3fdbmsha2d293fec8f8c53p16f7a3jsn37a1e5d9aea9',
		
	}
};

async function callUrbanDictionary() {
  const response = await fetch(API_URL, options);
  const results = await response.json();
  console.log(results);
}
callUrbanDictionary()