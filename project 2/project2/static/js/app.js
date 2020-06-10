// // from data.js
// var tableData = data;
// var filteredData = tableData; 

// d3.json('http://127.0.0.1:5000/api/v1/resources/books/all').then(function(data) {
//   console.log(data);
// });

 //   // Get a reference to the table body

const tbody = d3.select("tbody") ;
var tableData ;
var filteredData ; 

var codeElement ;
var ProductdefElement ;
var DescriptionElement ;
var cetaneoctaneElement ;
var requesterElement ;

var button ;


var codeValue ;
var ProductdefValue ;
var DescriptionValue ;
var cetaneoctaneValue ;
var requesterValue ;

var codeFilter ;
var ProductdefFilter ;
var DescriptionFilter ;
var cetaneoctaneFilter ;
var requesterFilter ;

// tbody = d3.select("tbody"); 

function displaydata(data, minVal=0, maxVal=20){

  //clearing previous filters
  tbody.text("");
  console.log("Display :" , data);
  //  Refactor to use Arrow Functions!
  let selection = data.result.slice(minVal,maxVal);
  selection.forEach((ProductData) => {
    var row = tbody.append("tr");
    Object.entries(ProductData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

function displaydata2(data){

  //clearing previous filters
  tbody.text("");
  console.log("Display :" , data);
  //  Refactor to use Arrow Functions!
  // let selection = data.result.slice(0,10);
  data.forEach((ProductData) => {
    var row = tbody.append("tr");
    Object.entries(ProductData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

d3.json('/api/v1/resources/codes/all', function(data) {
  console.log(data);
   tableData = data;
   filteredData = tableData; 

    //   // Get a reference to the table body
    //  tbody = d3.select("tbody");

    //   // Select the input element and get the raw HTML node
       codeElement = d3.select("#code");
       ProductdefElement = d3.select("#Productdef");
       DescriptionElement = d3.select("#Description");
       cetaneoctaneElement = d3.select("#cetaneoctane");
       requesterElement = d3.select("#requester");
    // // Console.log the weather data from data.js
    // console.log(data);

     displaydata(tableData);

     button = d3.select("#filter-btn");
     nextButton = d3.select("#nextButton")
     prevButton = d3.select("#prevButton")

     nextButton.on("click", function(){
       displaydata(tableData, minVal=20, maxVal=40)
     })
     prevButton.on("click", function(){
       displaydata(tableData, minVal=0, maxVal=20)
     })

     button.on("click", function() {
      
      console.log("Filter Button Was Clicked");
        
      //clearing all values displayed on the webpage from previous filters
      console.log("Clearing Old Entries");
      tbody.text("");

      // filteredData = codeFilter(data);


      // Get the value property of the input element
      codeValue = codeElement.property("value");
      console.log(codeValue);
      ProductdefValue = ProductdefElement.property("value");
      console.log(ProductdefValue);
      DescriptionValue = DescriptionElement.property("value");
      console.log(DescriptionValue);
      cetaneoctaneValue = cetaneoctaneElement.property("value");
      console.log(cetaneoctaneValue);
      requesterValue = requesterElement.property("value");
      console.log(requesterValue);

      // var filteredData = data.filter(data => data.Date === inputValue);

      // console.log(filteredData);

      // creating functions that will filter by catagory

      // codeFilter = (tbody)=>{
      //     return tbody.filter(ProductData=>ProductData.code === codeValue);
      //   };
      
      // $(document).ready(function () {
      //   $(“#tableSearch”).on(“keyup”, function () {
      //       var value = $(this).val().toLowerCase();
      //       $(“#myTable tr”).filter(function () {
      //           $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      //       });
      //   });
      // });

      // function codeFilter(tableData){
      //   let returnData = tableData['result'].filter(d=>d.code === codeValue);
      //   console.log(returnData)
      //   return returnData
      //   // return false
      // };

      // ProductdefFilter = (tbody)=>{
      //     return tbody.filter(ProductData=>ProductData.product_definition === ProductdefValue);
      //   };
      // DescriptionFilter = (tbody)=>{
      //     return tbody.filter(ProductData=>ProductData.description === DescriptionValue);
      //   };
      // cetaneoctaneFilter = (tbody)=>{
      //     return tbody.filter(ProductData=>ProductData.cetane_octane === cetaneoctaneValue);
      //   };
      // requesterFilter = (tbody)=>{
      //     return tbody.filter(ProductData=>ProductData.requester === requesterValue);
      //   };
      // //appending filtered data to webpage
      if (codeValue != "") {
        console.log(`Filter-Date: ${codeValue}`);
        filteredData = codeFilter(filteredData);
        displaydata2(filteredData);
      }
      else {
        displaydata2(filteredData);
      }
      // if (ProductdefValue != "") {
      //   console.log(`Filter-Productdef: ${ProductdefValue}`);
      //   filteredData = ProductdefFilter(filteredData);
      //   displaydata(filteredData);
      // }
      // else {
      //   displaydata(filteredData);
      // }
      // if (DescriptionValue != "") {
      //   console.log(`Filter-Description: ${DescriptionValue}`);
      //   filteredData = DescriptionFilter(filteredData);
      //   displaydata(filteredData);
      // }
      // else {
      //   displaydata(filteredData);
      // }
      // if (cetaneoctaneFilter != "") {
      //   console.log(`Filter-cetaneoctane: ${cetaneoctaneValue}`);
      //   filteredData = cetaneoctaneFilter(filteredData);
      //   displaydata(filteredData);
      // }
      // else {
      //   displaydata(filteredData);
      // }
      // if (requesterValue != "") {
      //   console.log(`Filter-shape: ${requesterValue}`);
      //   filteredData = requesterFilter(filteredData);
      //   displaydata(filteredData);
      // }
      // else {
      //   displaydata(filteredData);
      // }
    });
});
