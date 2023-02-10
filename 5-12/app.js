async function draw() {
  // Data
  const dataset = await d3.json("data.json");

  const sizeAccessor = (d) => d.size;
  const nameAccessor = (d) => d.name;

  // Dimensions
  let dimensions = {
    width: 200,
    height: 500,
    margin: 50,
  };

  // Draw Image
  const svg = d3
    .select("#chart")
    .append("svg")
    .attr("width", dimensions.width)
    .attr("height", dimensions.height);

  const circlesGroup = svg.append("g");

  circlesGroup
    .selectAll("circle")
    .data(dataset)
    .join("circles")
    .attr("cx", dimensions.margin)
    .attr("cy", dimensions.margin)
    .attr("r", 6);

  circlesGroup
    .selectAll("text")
    .data(dataset)
    .join("text")
    .attr("x", dimensions.margin + 15)
    .attr("y", dimensions.margin)
    .text(nameAccessor);
}

draw();
