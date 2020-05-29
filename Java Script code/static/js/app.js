// from data.js
var tableData = data;
var filteredData = tableData; 

// Get a reference to the table body
var tbody = d3.select("tbody");


  // Select the input element and get the raw HTML node
  const CodeElement = d3.select("#Code");
  const cityElement = d3.select("#city");
  const stateElement = d3.select("#state");
  const countryElement = d3.select("#country");
  const shapeElement = d3.select("#shape");


// Console.log the weather data from data.js
console.log(data);

const displaydata = (data)=>{

  //clearing previous filters
  tbody.text("");

  //  Refactor to use Arrow Functions!
  data.forEach((UFOSightings) => {
    var row = tbody.append("tr");
    Object.entries(UFOSightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

displaydata(tableData);

const button = d3.select("#filter-btn");

button.on("click", function() {
  
  console.log("Filter Button Was Clicked");
    
  //clearing all values displayed on the webpage from previous filters
  console.log("Clearing Old Entries");
  tbody.text("");

  filteredData = tableData;


  // Get the value property of the input element
  var CodeValue = CodeElement.property("value");
  console.log(CodeValue);
  var cityValue = cityElement.property("value");
  console.log(cityValue);
  var stateValue = stateElement.property("value");
  console.log(stateValue);
  var countryValue = countryElement.property("value");
  console.log(countryValue);
  var shapeValue = shapeElement.property("value");
  console.log(shapeValue);


  // var filteredData = data.filter(data => data.Date === inputValue);

  // console.log(filteredData);

  // creating functions that will filter by catagory
  const CodeFilter = (tbody)=>{
      return tbody.filter(UFOSightings=>UFOSightings.Codetime === CodeValue);
    };
   
  const cityFilter = (tbody)=>{
      return tbody.filter(UFOSightings=>UFOSightings.city === cityValue);
    };
  const stateFilter = (tbody)=>{
      return tbody.filter(UFOSightings=>UFOSightings.state === stateValue);
    };
  const countryFilter = (tbody)=>{
      return tbody.filter(UFOSightings=>UFOSightings.country === countryValue);
    };
  const shapeFilter = (tbody)=>{
      return tbody.filter(UFOSightings=>UFOSightings.shape === shapeValue);
    };
  // //appending filtered data to webpage
  if (CodeValue != "") {
    console.log(`Filter-Code: ${CodeValue}`);
    filteredData = CodeFilter(filteredData);
    displaydata(filteredData);
  }
  else {
    displaydata(filteredData);
  }
  if (cityValue != "") {
    console.log(`Filter-city: ${cityValue}`);
    filteredData = cityFilter(filteredData);
    displaydata(filteredData);
  }
  else {
    displaydata(filteredData);
  }
  if (stateValue != "") {
    console.log(`Filter-state: ${stateValue}`);
    filteredData = stateFilter(filteredData);
    displaydata(filteredData);
  }
  else {
    displaydata(filteredData);
  }
  if (countryValue != "") {
    console.log(`Filter-state: ${countryValue}`);
    filteredData = countryFilter(filteredData);
    displaydata(filteredData);
  }
  else {
    displaydata(filteredData);
  }
  if (shapeValue != "") {
    console.log(`Filter-shape: ${shapeValue}`);
    filteredData = shapeFilter(filteredData);
    displaydata(filteredData);
  }
  else {
    displaydata(filteredData);
  }
});

