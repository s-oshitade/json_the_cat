const request  = require('request');

const url = `https://api.thecatapi.com/v1/breeds/search?q=${process.argv.slice(2).toString()}`
request(url, (error, response, body) => {
  if(error) throw error;
  console.log(`status code: `, response.statusCode);
  const data = JSON.parse(body);
  console.log(data[0].description)
})