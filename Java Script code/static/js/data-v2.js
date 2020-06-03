// url = '/api/v1/resources/books/all'

// var getJSON = function(url, callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//   xhr.responseType = 'json';
//   xhr.onload = function() {
//     var status = xhr.status;
//     if (status === 200) {
//       callback(null, xhr.response);
//     } else {
//       callback(status, xhr.response);
//     }
//   };
//   xhr.send();
// };
// getJSON('http://query.yahooapis.com/v1/public/yql?q=select%20%2a%20from%20yahoo.finance.quotes%20WHERE%20symbol%3D%27WRC%27&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys&callback',
// function(err, data) {
//   if (err !== null) {
//     alert('Something went wrong: ' + err);
//   } else {
//     alert('Your query count: ' + data.query.count);
//   }
// });



// async function getData(url) {
//   const response = await fetch(url);

//   return response.json()
// }

// async function main() {
//   const data = await getData(URL);

//   console.log(data)
// }

// $.getJSON('http://127.0.0.1:5000/api/v1/resources/books/all', function(data) {
//   //data is the JSON string
// });


// var data;

// url = 'http://127.0.0.1:5000/api/v1/resources/books/all';

// response = fetch(url, {mode: "no-cors"});

// if (response.ok) { // if HTTP-status is 200-299
//   // get the response body (the method explained below)
//   data = response.json();
//   console.log('data', data);

// } else {

//   alert("HTTP-Error: " + response.status);
// }


// var data;

// fetch('http://127.0.0.1:5000/api/v1/resources/books/all')
//   .then(res => res.json())
//   .then(data => obj = data)
//   .then(() => console.log(data))

var data = "http://127.0.0.1:5000/api/v1/resources/books/all"

d3.json(data, function(data) {
  console.log(data);
});

// var data = [{
//   code: "B78",
//   product_definition: "FUEL ETHANOL",
//   description: "ALTERNATIVE FUEL - Ed85",
//   cetane_octane: "",
//   oxygenated_rbob_type: "A",
//   oxygenate_percent: "85",
//   comments: "Ed85 85% ETHANOL/15% CARBOB" ,
//   requester : "Steve Wood",
//   date_code_assigned : "10/24/2019"
//   },
//   {
//     code: "C00",
//     product_definition: "MIDGRADE",
//     description: "CG",
//     cetane_octane: "91.5",
//     oxygenated_rbob_type: "A",
//     oxygenate_percent: "10",
//     comments: "",
//     requester :"SARA GLEASON" ,
//     date_code_assigned : "11/5/1997"

//   }
// ];
