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

var button = d3.select("#filter-btn");

// React to Click
button.on("click", function() {

  //   Get input from field
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Filter Data
  var filteredData = tableData.filter(entry => entry.datetime === inputValue);
  
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