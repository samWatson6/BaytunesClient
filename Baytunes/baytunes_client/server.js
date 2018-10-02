const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const cors = require("cors");
const API_KEY = "MTEwNTk3MDN8MTUyMjUxMTM0OC41Mg";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/concerts", function(req, res) {
  let params = req.url.split("?")[1];
  let start, end;
  if (params) {
    start = params.split("=")[1].slice(0, 10);
    console.log(start);
    end = params.split("=")[2].slice(0, 10);
  }

  //seatGeek API Events Call
  let location = "lat=37.7749&lon=-122.4194";
  let range = "range=15mi";
  let startDate = start ? start : getCurrentDate();
  let endDate = end ? end : getNextDate();
  let dateRange = `datetime_utc.gte=${startDate}&datetime_utc.lte=${endDate}`;
  let url = `https://api.seatgeek.com/2/events?client_id=${API_KEY}&${location}&${range}&per_page=25&type=concert&${dateRange}`;

  request.get(url, (error, response, body) => {
    if (error) {
      res.sendStatus(501);
    }
    res.send(response);
  });
});

app.listen(3001, function() {
  console.log("listening on port 3001!");
});

let getCurrentDate = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!

  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + "-" + mm + "-" + dd;
  return today;
};

let getNextDate = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!

  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (dd < 23) {
    dd = parseInt(dd, 10) + 7;
    dd = dd.toString();
  } else {
    dd = 30;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + "-" + mm + "-" + dd;
  return today;
};
