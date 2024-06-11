  // Use D3 to select the dropdown menu
let dropdownMenu = d3.select("#selDataset");

// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field

    var metadata = data.metadata;


    // Filter the metadata for the object with the desired sample number
    let filteredData = metadata.filter();


    // Use d3 to select the panel with id of `#sample-metadata`
    let panel = d3.select(".text");
    

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    filtered = filteredData[0];
    //loop here
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field

    var samples = data.samples;


    // Filter the samples for the object with the desired sample number
    let filteredData2 = metadata.filter();
    filtered2 = filteredData2[0];

    // Get the otu_ids, otu_labels, and sample_values

    var otu_ids = filteredData2.otu_ids;
    var otu_labels = filteredData2.otu_labels;
    var sample_values = filteredData2.sample_values;

    // Build a Bubble Chart
    // Slice the first 10 objects for plotting.
    // data = data.slice(0, 10);
    let bubbleChart = [{
      y: otu_ids.slice(0, 10).reverse(),
      type: 'bubble',
      x: sample_values,
      color: otu_ids,
      size: sample_values
  }];

  let bubbleLayout = {
    title: "Bubble Chart of OTU IDs"
  };

    // Render the Bubble Chart

    Plotly.newplot('bubble',bubbleChart,bubblelayout)

    // For the Bar Chart, map the otu_ids to a list of strings for your ytick

    let y = otu_ids.slice(0, 10).reverse();

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately

  
    let barChart = [{
      y: y,
      type: 'bar',
      x: sample_values,
    }];

    let barLayout = {
      title: "Bar Chart of OTU IDs"
    };

    // Render the Bar Chart
    Plotly.newplot('bar',barChart,barLayout)
  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
  names = d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").names;


    // Use d3 to select the dropdown with id of `#selDataset`

    let selected = d3.select("#selDataset");


    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
      let nameData = data.names;
      nameData.forEach((name) => {
        selected.append;
      })
});

    // Get the first sample from the list
    let firstName = nameData[0];

    // Build charts and metadata panel with the first sample
    buildCharts(nameData);
    buildMetadata(nameData);
    
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(nameData);
  buildMetadata(nameData);
}

// Initialize the dashboard
init();
