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
 var MxVal ;
 var MnVal;
 
 MnVal = 0 ;
 MxVal = 20 ;
 
 
 function displaydata(data, minVal=MnVal, maxVal=MxVal){
 
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

 function displayfilterdata(data, minVal=MnVal, maxVal=MxVal){

  //clearing previous filters
  tbody.text("");
  console.log("Display :" , data);
  //  Refactor to use Arrow Functions!
  let selection = data.slice(minVal,maxVal);
  selection.forEach((ProductData) => {
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
      resetButton= d3.select("#reset-btn")
      nextButton.on("click", function(){
        
 
       console.log(`max: ${MxVal}`, `min: ${MnVal}`);
        if (MxVal < 3376){
         MnVal = MnVal + 20 ;
         MxVal = MxVal + 20 ;
         displaydata(filteredData, minVal=MnVal, maxVal=MxVal);
       };
 
      })
 
     prevButton.on("click", function(){
       if (MnVal > 0){
         MnVal = MnVal - 20 ;
         MxVal = MxVal - 20 ;
         displaydata(filteredData, minVal=MnVal, maxVal=MxVal);
       };
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
 
 
 
       function codeFilter(tableData){
          var matchRegex = new RegExp(searchValue, 'i');
          let returnData = tableData['result'].filter(d=>d.code === codeValue);
         // var value = $(code).val().toLowerCase();
         // $("#table tr").filter(function () {
         //   $(code).toggle($(code).text().toLowerCase().indexOf(value) > -1)
         // });
 
         console.log(returnData)
         return returnData
         // return false
       };

       function codeFilter(tableData){
        let returnData = tableData['result'].filter(d=>d.code === codeValue);
       // var value = $(code).val().toLowerCase();
       // $("#table tr").filter(function () {
       //   $(code).toggle($(code).text().toLowerCase().indexOf(value) > -1)
       // });

       console.log(returnData)
       return returnData
       // return false
     };
 
 
 
       // function ttt() {
       //   // Declare variables
       //   var input, filter, table, tr, td, i, txtValue;
       //   input = d3.select("#code");
       //   filter = input.value.toUpperCase();
       //   table = d3.select("#table");
       //   tr = table.getElementsByTagName("tr");
       
       //   // Loop through all table rows, and hide those who don't match the search query
       //   for (i = 0; i < tr.length; i++) {
       //     td = tr[i].getElementsByTagName("td")[0];
       //     if (td) {
       //       txtValue = td.textContent || td.innerText;
       //       if (txtValue.toUpperCase().indexOf(filter) > -1) {
       //         tr[i].style.display = "";
       //       } else {
       //         tr[i].style.display = "none";
       //       }
       //     }
       //   }
       // }
 
       // $(document).ready(function () {
       //   $(“#tableSearch”).on(“keyup”, function () {
             // var value = $(code).val().toLowerCase();
             // $(“#table tr”).filter(function () {
             //     $(code).toggle($(code).text().toLowerCase().indexOf(value) > -1)
             // });
       //   });
       // })
       
     function ProductdefFilter(tableData){
         var codeFilter = tableData['result'].filter(d=>d.product_definition === ProductdefValue);
        console.log(returnData)
        return returnData
        // return false
      };
 
     function DescriptionFilter(tableData){
       let returnData = tableData['result'].filter(d=>d.description === DescriptionValue);
      console.log(returnData)
      return returnData
      // return false
      };
     function cetaneoctaneFilter(tableData){
       let returnData = tableData['result'].filter(d=>d.cetane_octane === cetaneoctaneValue);
      console.log(returnData)
      return returnData
      // return false
      };
     function requesterFilter(tableData){
       let returnData = tableData['result'].filter(d=>d.requester === requesterValue);
      console.log(returnData)
      return returnData
      // return false
      };
       // //appending filtered data to webpage
     if (codeValue != "") {
         console.log(`Filter-Code: ${codeValue}`);
         filteredData = codeFilter(filteredData);
         MnVal = 0 ;
         MxVal = 20 ;
         displayfilterdata(filteredData, minVal=MnVal, maxVal=MxVal);
     }
       // else {
       //   displayfiltered(filteredData);
       // }
     if (ProductdefValue != "") {
         console.log(`Filter-Productdef: ${ProductdefValue}`);
         filteredData = ProductdefFilter(filteredData);
         MnVal = 0 ;
         MxVal = 20 ;
         displayfilterdata(filteredData, minVal=MnVal, maxVal=MxVal);
     }
       // else {
       //   displaydata(filteredData);
       // }
     if (DescriptionValue != "") {
         console.log(`Filter-Description: ${DescriptionValue}`);
         filteredData = DescriptionFilter(filteredData);
         MnVal = 0 ;
         MxVal = 20 ;
         displayfilterdata(filteredData, minVal=MnVal, maxVal=MxVal);
     }
       // else {
       //   displaydata(filteredData);
       // }
     if (cetaneoctaneValue != "") {
         console.log(`Filter-cetaneoctane: ${cetaneoctaneValue}`);
         filteredData = cetaneoctaneFilter(filteredData);
         MnVal = 0 ;
         MxVal = 20 ;
         displayfilterdata(filteredData, minVal=MnVal, maxVal=MxVal);
     }
       // else {
       //   displaydata(filteredData);
       // }
     if (requesterValue != "") {
         console.log(`Filter-shape: ${requesterValue}`);
         filteredData = requesterFilter(filteredData);
         MnVal = 0 ;
         MxVal = 20 ;
         displayfilterdata(filteredData, minVal=MnVal, maxVal=MxVal);
     }
       // else {
       //   displaydata(filteredData);
       // }
     });
 
 //  resetting the displayed data to the full dataset while keeping the filter values untouched
 resetButton.on("click", function() {
   console.log("Clearing Old Entries");
   tbody.text("");
   document.getElementById('code').value = '';
   document.getElementById('Productdef').value = '';
   document.getElementById('Description').value = '';
   document.getElementById('cetaneoctane').value = '';
   document.getElementById('requester').value = '';
   MnVal = 0 ;
   MxVal = 20 ;
   displaydata(tableData, minVal=MnVal, maxVal=MxVal);
   filteredData = tableData;
 });
 
 
 });
 
 