const request = require("request");

const url = `https://api.thecatapi.com/v1/breeds/search?q=${process.argv
  .slice(2)
  .toString()}`;
request(url, (error, response, body) => {
  if (error) throw error;
  const data = JSON.parse(body);
  console.log("test: ", data.length);
  if (data.length === 0) {
    console.log("Breed name not found!");
    return;
  }
  console.log(data[0].description);
  let name = data[0].name;
  console.log("name", name);
});
