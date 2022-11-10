// const Upbit = require('./Upbit_lib')

// async function start() {
//   const upbit = new Upbit('4QIpwATaUkT8UiXZ2bqzh1EwN6tZUanUEouxAwLS', '3Gqypce2hxLoIBxhJ32ePNsMx9gC5KWx1R0zYZ5e')

//   // console.log('-- market_all -------------------------------------------------')
//   // let json = await upbit.market_all()
//   // console.log(json.data)
//   // {
//   //   console.log('---------- market ticker ------');
//   //   let {data: data1 } = await upbit.market_ticker('KRW-XRP');
//   //   console.log(data1);
//   // }

//   {
//     console.log('---------------account---------')
//     let {data:data2} = await upbit.accounts()
//     console.log(data2)
//   }

//   {
//     console.log('---------------시세-------------')
//     let {data:data2} = await upbit.market_ticker('KRW-ETH')
//     console.log(data2[0].trade_price);
//   }
// }

// start()
