//const pBrowser = document.querySelector("p");
const el = d3
  .select("body")
  .append("p")
  //.attr("class", "foo")
  .classed("foo", true)
  .classed("bar", true)
  .style("color", "blue")
  .text("Hello World!");

//console.log(pBrowser);
console.log(el);
