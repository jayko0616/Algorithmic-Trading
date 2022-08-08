
// // import { Fragment } from 'react'
// import './App.css';
// import React,{Component} from 'react';
// import Counter from './Counter';
// import logo from './logo.svg';
// import ApexChart from 'apexcharts'
// import ApexCandleChart from './ApexCandleChart';



// class App extends Component{


//       <ApexChart</
//           type="candlestick"
//           series={[
//             {
//               data: 
//                 data?.map((price) => {
//                   return [
//                     Date.parse(price.time_close),
//                     price.open,
//                     price.high,
//                     price.low,
//                     price.close,
//                   ];
//                 }),
//             },
//           ]}
//           options={{
//             theme: {
//               mode: "dark",
//             },
//             chart: {
//               type: "candlestick",
//               height: 350,
//               width: 500,
//               toolbar: {
//                 show:false,
//               },
//               background: "transparent",
//             },
//             stroke: {
//               curve: "smooth",
//               width: 2,
//             },
//             yaxis: {
//               show: false,
//             },
//             xaxis: {
//               type: "datetime",
//               categories: data?.map((price) => price.time_close),
//               labels: {
//                 style: {
//                   colors: '#9c88ff'
//                 }
//               }
//             },
//             plotOptions: {
//               candlestick: {
//                 colors: {
//                   upward: '#3C90EB',
//                   downward: '#DF7D46'
//                 }
//               }
//             }
//           }}
//         />
//     );
//   }
// }



// import React, { Component } from 'react'
// import ApexCharts from 'react-apexcharts'

// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       series: [{
//         name: "Desktops",
//         data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
//       },
//       {
//         name: "Data2",
//         data: [1, 4, 15, 41, 69, 32, 39, 31, 48]
//       }],

//       options: {  
//         chart: {
//           zoom: {
//             enabled: false
//           }
//         },
//         dataLabels: {
//           enabled: false
//         },
//         stroke: {
//           curve: 'straight'
//         },
//         title: {
//           text: 'Product Trends by Month',
//           align: 'left'
//         },
//         grid: {
//           row: {
//             colors: ['#f3f3f3f3', 'transparent'], // takes an array which will be repeated on columns
//             opacity: 0.5
//           },
//         },
//         xaxis: {
//           categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
//         }
//       }
//     }
//   }
//   render() {
//     return (
//       <ApexCharts
//         options={this.state.options}
//         series={this.state.series}
//         typs='line'
//         width={500}
//         height={300}
//         />
//     );
//   }
// }



// import React, { Component } from 'react'
// import ApexCharts from 'react-apexcharts'
// import Chart from "react-apexcharts";

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {
//         chart: {
//           id: "basic-bar"
//         },
//         xaxis: {
//           categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
//         }
//       },
//       series: [
//         {
//           name: "series-1",
//           data: [30, 40, 45, 50, 49, 60, 70, 91]
//         }
//       ]
//     };
//   }

//   render() {
//     return (
//       <div className="app">
//         <div className="row">
//           <div className="mixed-chart">
//             <Chart
//               options={this.state.options}
//               series={this.state.series}
//               type="bar"
//               width="500"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;


import React, { Component } from 'react';
import ApexChart from './ApexChart';
class App extends Component {
  render() {
    return (<ApexChart/>);
  }
}

export default App;