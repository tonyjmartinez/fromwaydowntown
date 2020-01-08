const axios = require("axios");

module.exports.handler = async function(event, context) {
  console.log("queryStringParameters", event.queryStringParameters);
  const res = await axios.get(
    "http://data.nba.net/data/10s/prod/v1/20200104/scoreboard.json"
  );

  console.log(res);

  return {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify({
      games: res.data
    })
  };
};
