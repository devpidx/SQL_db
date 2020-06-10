<link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
crossorigin=""/>

<script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
crossorigin=""></script>



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













      //     var svgWidth = 950;
  //     var svgHeight = 600;
      
  //     var margin = {
  //       top: 30,
  //       right: 40,
  //       bottom: 90,
  //       left: 90
  //     };
      
  //     var width = svgWidth - margin.left - margin.right;
  //     var height = svgHeight - margin.top - margin.bottom;
      
  //     // Create an SVG wrapper, append an SVG group that will hold our chart,
  //     // and shift the latter by left and top margins.
  //     var svg = d3.select('#scatter').append('svg').attr('width', svgWidth).attr('height', svgHeight);
      
  //     // Append an SVG group
  //     var chartGroup = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`);
      
  //     // Initial Params
  //     var chosenXAxis = 'product families';
      
  //     // function used for updating x-scale var upon click on axis label
  //     function xScale(chartData, chosenXAxis) {
  //       // create scales
  //       var xLinearScale = d3
  //         .scaleLinear()
  //         .domain([ d3.min(chartData, (d) => d[chosenXAxis]) * 0.8, d3.max(chartData, (d) => d[chosenXAxis]) * 1.2 ])
  //         .range([ 0, width ]);
      
  //       return xLinearScale;
  //     }
      
  //     // function used for updating xAxis var upon click on axis label
  //     function renderAxes(newXScale, xAxis) {
  //       var bottomAxis = d3.axisBottom(newXScale);
      
  //       xAxis.transition().duration(1000).call(bottomAxis);
      
  //       return xAxis;
  //     }
      
  //     // function used for updating circles group with a transition to
  //     // new circles
  //     function renderCircles(circlesGroup, newXScale, chosenXAxis) {
  //       circlesGroup.transition().duration(1000).attr('cx', (d) => newXScale(d[chosenXAxis]));
      
  //       return circlesGroup;
  //     }
      
  //     function renderText(circlesText, newXScale, chosenXAxis) {
  //       circlesText.transition().duration(1000).attr('x', (d) => newXScale(d[chosenXAxis]) - 5);
      
  //       return circlesText;
  //     }
      
  //     // function used for updating circles group with new tooltip
  //     function updateToolTip(chosenXAxis, circlesGroup) {
  //       var label;
      
  //       if (chosenXAxis === 'product families') {
  //         label = 'Product Type:';
  //       } else if (chosenXAxis === 'poverty') {
  //         label = 'Poverty Rate:';
  //       } else {
  //         label = 'Age:';
  //       }
      
  //       var toolTip = d3.tip().attr('class', 'd3-tip').offset([ 60, -60 ]).html(function(d) {
  //         return `${d.state}<br>${label} ${d[chosenXAxis]}<br>${d.abbr}`;
  //       });
      
  //       circlesGroup.call(toolTip);
      
  //       circlesGroup
  //         .on('mouseover', function(data) {
  //           toolTip.show(data);
  //         })
  //         // onmouseout event
  //         .on('mouseout', function(data, index) {
  //           toolTip.hide(data);
  //         });
      
  //       return circlesGroup;
  //     }
      
  //  // Retrieve data from the CSV file and execute everything below
  //     d3.json('/api/v1/resources/codes/all', function(data)
  //     .then(function(chartData, err) {
  //         if (err) throw err;
      
  //         // parse data
  //         chartData.forEach(function(data) {
  //           data.codes = +data.codes;
  //           data.family = +data.family;
  //           // data.poverty = +data.poverty;
  //           // data.age = +data.age;
  //           // data.healthcare = +data.healthcare;
  //           // data.abbr = data.abbr;
  //           // data.state = data.state;
  //           // console.log(data);
  //         });
      
  //         // xLinearScale function above csv import
  //         var xLinearScale = xScale(chartData, chosenXAxis);
      
  //         // Create y scale function
  //         var yLinearScale = d3
  //           .scaleLinear()
  //           .domain([ 0, d3.max(chartData, (d) => d.codes) + 20 ])
  //           .range([ height, 0 ]);
      
  //         // Create initial axis functions
  //         var bottomAxis = d3.axisBottom(xLinearScale);
  //         var leftAxis = d3.axisLeft(yLinearScale);
      
  //         // append x axis
  //         var xAxis = chartGroup
  //           .append('g')
  //           .classed('x-axis', true)
  //           .attr('transform', `translate(0, ${height})`)
  //           .call(bottomAxis);
      
  //         // append y axis
  //         chartGroup.append('g').call(leftAxis);
      
  //         // append initial circles
  //         var circlesGroup = chartGroup
  //           .selectAll('circle')
  //           .data(chartData)
  //           .enter()
  //           .append('circle')
  //           .attr('cx', (d) => xLinearScale(d[chosenXAxis]))
  //           .attr('cy', (d) => yLinearScale(d.obesity))
  //           .attr('r', 10)
  //           .attr('fill', 'lightsteelblue')
  //           .attr('stroke', 'steelblue')
  //           .attr('stroke-width', '.5')
  //           .attr('opacity', '.75');
      
  //         var circlesText = chartGroup
  //           .selectAll('label')
  //           .data(chartData)
  //           .enter()
  //           .append('text')
  //           .text(function(d) {
  //             return d.abbr;
  //           })
  //           .attr('x', (d) => xLinearScale(d[chosenXAxis]) - 5)
  //           .attr('y', (d) => yLinearScale(d.obesity) + 3.25)
  //           .attr('font-size', '7px');
      
  //         // Create group for  2 x- axis labels
  //         var chartGroup = chartGroup.append('g').attr('transform', `translate(${width / 2}, ${height + 20})`);
      
  //         //apending x axis
  //         var chartLabel = labelsGroup
  //           .append('text')
  //           .attr('x', 0)
  //           .attr('y', 20)
  //           .attr('value', 'product families') // value to grab for event listener
  //           .classed('active', true)
  //           .text('Product Families');
      
  //         var ageLabel = labelsGroup
  //           .append('text')
  //           .attr('x', 0)
  //           .attr('y', 40)
  //           .attr('value', 'age') // value to grab for event listener
  //           .classed('inactive', true)
  //           .text('Age');
      
  //         var povertyLabel = labelsGroup
  //           .append('text')
  //           .attr('x', 0)
  //           .attr('y', 60)
  //           .attr('value', 'poverty') // value to grab for event listener
  //           .classed('inactive', true)
  //           .text('Poverty Rate');
      
  //         // append y axis
  //         chartGroup
  //           .append('text')
  //           .attr('transform', 'rotate(-90)')
  //           .attr('y', 0 - margin.left / 2)
  //           .attr('x', 0 - height / 2)
  //           .attr('dy', '1em')
  //           .classed('axis-text', true)
  //           .text('Obesity Rate');
      
  //         // updateToolTip function above csv import
  //         var circlesGroup = updateToolTip(chosenXAxis, circlesGroup, circlesText);
      
  //         // x axis labels event listener
  //         labelsGroup.selectAll('text').on('click', function() {
  //           // get value of selection
  //           var value = d3.select(this).attr('value');
  //           if (value !== chosenXAxis) {
  //             // replaces chosenXAxis with value
  //             chosenXAxis = value;
      
  //             // console.log(chosenXAxis)
      
  //             // functions here found above csv import
  //             // updates x scale for new data
  //             xLinearScale = xScale(smokingData, chosenXAxis);
      
  //             // updates x axis with transition
  //             xAxis = renderAxes(xLinearScale, xAxis);
      
  //             // updates circles with new x values
  //             circlesGroup = renderCircles(circlesGroup, xLinearScale, chosenXAxis);
  //             circlesText = renderText(circlesText, xLinearScale, chosenXAxis);
  //             // updates tooltips with new info
  //             circlesGroup = updateToolTip(chosenXAxis, circlesGroup);
      
  //             // changes classes to change bold text
  //             if (chosenXAxis === 'poverty') {
  //               smokingLabel.classed('active', false).classed('inactive', true);
  //               povertyLabel.classed('active', true).classed('inactive', false);
  //               ageLabel.classed('active', false).classed('inactive', true);
  //             } else if (chosenXAxis === 'age') {
  //               smokingLabel.classed('active', false).classed('inactive', true);
  //               povertyLabel.classed('active', false).classed('inactive', true);
  //               ageLabel.classed('active', true).classed('inactive', false);
  //             } else {
  //               smokingLabel.classed('active', true).classed('inactive', false);
  //               povertyLabel.classed('active', false).classed('inactive', true);
  //               ageLabel.classed('active', false).classed('inactive', true);
  //             }
  //           }
  //         });
  //       })
  //       .catch(function(error) {
  //         console.log(error);
  //       });
