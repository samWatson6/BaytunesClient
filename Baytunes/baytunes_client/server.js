const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const cors = require("cors");
const API_KEY = "sdfwes";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/concerts", function(req, res) {
  //seatGeek API Events Call
  let location = "lat=37.7749&lon=-122.4194";
  let range = "range=15mi";
  let startDate = "2018-10-18";
  let endDate = "2018-10-22";
  let dateRange = `datetime_utc.gte=${startDate}&datetime_utc.lte=${endDate}`;
  let url = `https://api.seatgeek.com/2/events?client_id=${API_KEY}&${location}&${range}&per_page=25&type=concert&${dateRange}`;

  request.get(url, (error, response, body) => {
    if (error) {
      res.sendStatus(501);
    }

    const body = response.body;
    res.send(response);
  });
});

app.listen(3001, function() {
  console.log("listening on port 3000!");
});
