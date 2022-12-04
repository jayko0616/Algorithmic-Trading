import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDictionary } from '../../../_actions/user_action';
import * as d3 from 'd3';

function PieChart() {
    const dispatch = useDispatch();
    
    var [str, setStr] = useState("");
    var sss;
    const dictionary = () => {
        dispatch(getDictionary())
        .then(response => {
                sss = response.payload.dictionary;
                sss = sss.replace('[', '');
                sss = sss.replace(']', '');
                console.log("str is..", str)
                setStr(sss);    
        })
    }

    dictionary();
    var rst = [];
    
    const mkarr = (str) => {
        str = str.replaceAll("},", "}&&");
        rst = str.split("&&");
        console.log("rst is", rst);
    }

    mkarr(str);
    console.log("rst[2] is!", rst[2])
    //console.log(JSON.parse(rst))


    //const data = arr;
    //const data =
   const data = [{'label': 'KRW', 'value': 9200.7221}, {'label': 'DOGE', 'value': 5499.143234}];
    const  outerRadius = 200;
    const  innerRadius = 90;
  
    const margin = {
      top: 50, right: 50, bottom: 50, left: 50,
    };
  
    const width = 2 * outerRadius + margin.left + margin.right;
    const height = 2 * outerRadius + margin.top + margin.bottom;
  
    const colorScale = d3     
      .scaleSequential()      
      .interpolator(d3.interpolateWarm)      
      .domain([0, data.length]);
  
    useEffect(() => {
      drawChart();
    }, [data]);
  
    function drawChart() {
      // Remove the old svg
      d3.select('#pie-container')
        .select('svg')
        .remove();
  
      // Create new svg
      const svg = d3
        .select('#pie-container')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`);
  
      const arcGenerator = d3
        .arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);
  
      const pieGenerator = d3
        .pie()
        .padAngle(0)
        .value((d) => d.value);
  
      const arc = svg
        .selectAll()
        .data(pieGenerator(data))
        .enter();
  
      // Append arcs
      arc
        .append('path')
        .attr('d', arcGenerator)
        .style('fill', (_, i) => colorScale(i))
        .style('stroke', '#ffffff')
        .style('stroke-width', 0);
  
      // Append text labels
      arc
        .append('text')
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'middle')
        .text((d) => d.data.label)
        .style('fill', (_, i) => colorScale(data.length - i))
        .attr('transform', (d) => {
          const [x, y] = arcGenerator.centroid(d);
          return `translate(${x}, ${y})`;
        });
    }    
  
    return <div id="pie-container" style={{textAlign: "center"}}/>;
  }

export default PieChart;