$.getJSON('http://127.0.0.1:5000/api/v1/resources/books/all', function(data) {
  //data is the JSON string
});


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



// var data = "/api/v1/resources/books/all"

// d3.json("/data/users.json", function(data) {
//   console.log(data);
// });

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
