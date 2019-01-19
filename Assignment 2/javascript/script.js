d3.select(window).on("resize", callFunction);

        callFunction();

      function  callFunction() {


var height = window.innerHeight;
var width = window.innerWidth;

var tooltip = d3.select("body").append("div").style("opacity", "0").style("position", "absolute");


var svgTest = d3.select("body").select("svg");
if(!svgTest.empty()){
    svgTest.remove();
}



var musea = d3.tree().size([width, height]);

var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");

var chartGroup = svg.append("g");


chartGroup.call(d3.zoom().scaleExtent([0.8,5]).on("zoom", function(){

  chartGroup.attr("transform", d3.event.transform);
}));




d3.json('javascript/musea.json')
    .get(function(error, data){
        console.log(data[0]);


var y = d3.scaleLinear()
        .domain([0,2000])
        .range([height,0]);
var x = d3.scaleLinear()
        .domain([0,2000])
        .range([0,width]);
var yAxis = d3.axisLeft(y);
var xAxis = d3.axisBottom(x);

    chartGroup.append("g").attr("class","musea")
            .selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
                .attr("cx",function(d){return x((d.x)/150); })
                .attr("cy", function(d){return y((d.y)/200);})
                .attr("fill","blue" )
                .attr("r", "5")
                .on("mousemove", function(d){
        
                    tooltip.style("opacity", "1").style("right", "px").style("top", "px");
                    tooltip.html("Naam: "+ d.name+ ". "+d.product_description);

                });

                


  
});

      }