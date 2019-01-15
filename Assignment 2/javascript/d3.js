var dataArray = [5,11,18];

var svg = d3.select("body").append("svg").attr("height","100%").attr("width", "100%");

svg.selectAll("rect")
                .data(dataArray)
                .enter()
                .append("rect")
                      .attr("height", function(d,i){return d*15;})
                      .attr("width", "50")
                      //d = datapoint , i = index
                      .attr("x", function(d,i){ return 60*i; })
                      .attr("y", function(d,i){ return 300-(d*15); })
                      .attr("fill", "green")
                      ;

var newX = 300;

svg.selectAll("circle.first")
         .data(dataArray)
         .enter().append("circle")
                .attr("class", "first")
                .attr("cx",function(d,i){ newX+=(d*3)+(i*20); return newX;  })
                .attr("cy","100")
                .attr("r",function(d){ return d*3; });


 var newX = 600;

 svg.selectAll("ellipse")
            .data(dataArray)
            .enter().append("ellipse")
                .attr("class","second")
                 .attr("cx",function(d,i){ newX+=(d*3)+(i*20); return newX;  })
                 .attr("cy","100")
                 .attr("rx",function(d){ return d*3; })
                 .attr("ry","30");



 var newX = 900;
svg.selectAll("line")
         .data(dataArray)
         .enter().append("line")
         .attr("stroke-width","2")
         .attr("x1",newX)
         .attr("y1", function(d,i){ return 80+(i*20) ;})
         .attr("x2", function(d){return newX+(d*15); })
         .attr("y2", function(d,i){ return 80+(i*20 ); });

svg.append("text")
            .attr("x", newX)
            .attr("y", 150)
            .attr("font-size", "30")
            .text("start");

svg.append("text")
            .attr("x", newX)
            .attr("y", 180)
            .attr("font-size", "30")
            .text("middel");

svg.append("text")
            .attr("x", newX)
            .attr("y", 210)
            .attr("font-size", "30")
            .text("bottom");


       