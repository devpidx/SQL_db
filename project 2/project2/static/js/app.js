// // from data.js
// var tableData = data;
// var filteredData = tableData; 

// d3.json('http://127.0.0.1:5000/api/v1/resources/books/all').then(function(data) {
//   console.log(data);
// });

d3.json('/api/v1/resources/books/all', function(data) {
  console.log(data);
});

// // Get a reference to the table body
// var tbody = d3.select("tbody");


//   // Select the input element and get the raw HTML node
//   const codeElement = d3.select("#code");
//   const ProductdefElement = d3.select("#Productdef");
//   const DescriptionElement = d3.select("#Description");
//   const cetaneoctaneElement = d3.select("#cetaneoctane");
//   const requesterElement = d3.select("#requester");


// // Console.log the weather data from data.js
// console.log(data);

// const displaydata = (data)=>{

//   //clearing previous filters
//   tbody.text("");

//   //  Refactor to use Arrow Functions!
//   data.forEach((ProductData) => {
//     var row = tbody.append("tr");
//     Object.entries(ProductData).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });
// }

// displaydata(tableData);

// const button = d3.select("#filter-btn");

// button.on("click", function() {
  
//   console.log("Filter Button Was Clicked");
    
//   //clearing all values displayed on the webpage from previous filters
//   console.log("Clearing Old Entries");
//   tbody.text("");

//   filteredData = tableData;


//   // Get the value property of the input element
//   var codeValue = codeElement.property("value");
//   console.log(codeValue);
//   var ProductdefValue = ProductdefElement.property("value");
//   console.log(ProductdefValue);
//   var DescriptionValue = DescriptionElement.property("value");
//   console.log(DescriptionValue);
//   var cetaneoctaneValue = cetaneoctaneElement.property("value");
//   console.log(cetaneoctaneValue);
//   var requesterValue = requesterElement.property("value");
//   console.log(requesterValue);


//   // var filteredData = data.filter(data => data.Date === inputValue);

//   // console.log(filteredData);

//   // creating functions that will filter by catagory
//   const codeFilter = (tbody)=>{
//       return tbody.filter(ProductData=>ProductData.code === codeValue);
//     };
   
//   const ProductdefFilter = (tbody)=>{
//       return tbody.filter(ProductData=>ProductData.product_definition === ProductdefValue);
//     };
//   const DescriptionFilter = (tbody)=>{
//       return tbody.filter(ProductData=>ProductData.description === DescriptionValue);
//     };
//   const cetaneoctaneFilter = (tbody)=>{
//       return tbody.filter(ProductData=>ProductData.cetane_octane === cetaneoctaneValue);
//     };
//   const requesterFilter = (tbody)=>{
//       return tbody.filter(ProductData=>ProductData.requester === requesterValue);
//     };
//   // //appending filtered data to webpage
//   if (codeValue != "") {
//     console.log(`Filter-Date: ${codeValue}`);
//     filteredData = codeFilter(filteredData);
//     displaydata(filteredData);
//   }
//   else {
//     displaydata(filteredData);
//   }
//   if (ProductdefValue != "") {
//     console.log(`Filter-Productdef: ${ProductdefValue}`);
//     filteredData = ProductdefFilter(filteredData);
//     displaydata(filteredData);
//   }
//   else {
//     displaydata(filteredData);
//   }
//   if (DescriptionValue != "") {
//     console.log(`Filter-Description: ${DescriptionValue}`);
//     filteredData = DescriptionFilter(filteredData);
//     displaydata(filteredData);
//   }
//   else {
//     displaydata(filteredData);
//   }
//   if (cetaneoctaneFilter != "") {
//     console.log(`Filter-cetaneoctane: ${cetaneoctaneValue}`);
//     filteredData = cetaneoctaneFilter(filteredData);
//     displaydata(filteredData);
//   }
//   else {
//     displaydata(filteredData);
//   }
//   if (requesterValue != "") {
//     console.log(`Filter-shape: ${requesterValue}`);
//     filteredData = requesterFilter(filteredData);
//     displaydata(filteredData);
//   }
//   else {
//     displaydata(filteredData);
//   }
// });

