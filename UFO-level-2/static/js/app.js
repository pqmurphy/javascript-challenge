// from data.js
var tableData = data;

function initialise() {
    var tbody = d3.select("tbody");
  
    tableData.forEach(function(data) {
      var row = tbody.append("tr");
      Object.entries(data).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  }
  
  initialise();

// Select Button
var button = d3.select("#filter-btn");

// React to Click
button.on("click", function() {

    //   Get input from field
    var inputElement = d3.select("#datetime");
    var filterElement = d3.select("#CategoryFilt");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var filterValue = filterElement.property("value"); 
    
    console.log(filterValue)

    // Filter Data
    if (filterValue === 'Date') {
        var filteredData = tableData.filter(entry => entry.datetime === inputValue);
    }
    else if (filterValue === 'City') {
        var filteredData = tableData.filter(entry => entry.city === inputValue);
    }
    else if (filterValue === 'State') {
        var filteredData = tableData.filter(entry => entry.state === inputValue);
    }
    else if (filterValue === 'Country') {
        var filteredData = tableData.filter(entry => entry.state === inputValue);
    }
    else if (filterValue === 'Shape') {
        var filteredData = tableData.filter(entry => entry.shape === inputValue);
    }
    
    console.log(filteredData)

    var tbody = d3.select("tbody");
    tbody.html("");

    filteredData.forEach(function(filteredData) {
        var row = tbody.append("tr");
        Object.entries(filteredData).forEach(function([key, value]) {
          var cell = row.append("td");
          cell.text(value);
        });
    });


    }
)