// // // import './App.css';
// // import React from 'react'
// // import {useState, useEffect} from 'react';
// // import Dashboard from './components/Dashboard';
// // import Navbar from './components/Navbar';
// // import StaffDetails from './components/StaffDetails';
// // import Logout from './components/Logout';
// // import { Route, Routes } from 'react-router-dom';
// // import Heading from './components/Heading';

// // function App() {


// //   const[uniqueVisitor, setUniqueVisitor] = useState(0)
// //   const[conversionRate, setConversionRate] = useState(0)
// //   const[orderValue, setOrderValue] = useState(0)
// //   const[cartCount, setCartCount] = useState(0)

// //   useEffect( () => {
// //     const fetchData = async () => {
// //         try {
    
// //       //  setTimeout (async ()  =>{   
// //         const response = await fetch('https://socket-io-server-mc3e.onrender.com/api/v1/getInfo');
// //             const data = await response.json();
// //             const uniqueVisitors = data.totalUniqueUsers
// //             // const uniqueVisitorCount = uniqueVisitors.length;
// //             const uniqueVisitorCount = uniqueVisitors;
            
// //             setUniqueVisitor(uniqueVisitorCount);
// //         // },1000 );
// //     } catch (error) {
// //         console.log(error);
// //     }

// // };
// //     fetchData();
// // }, []);




// // useEffect( () => {
// //   const fetchData = async () => {
// //       try {
  
// //     //  setTimeout (async ()  =>{   
// //       const response = await fetch('https://socket-io-server-mc3e.onrender.com/api/v1/getCustomerInfo');
// //           const data = await response.json();
// //           const crates = data.conversionRate
// //           // const uniqueVisitorCount = uniqueVisitors.length;
// //           const cratescount = crates;

// //           setConversionRate(cratescount);
// //           // console.log(cratescount)
// //       // },1000 );
// //   } catch (error) {
// //       console.log(error);
// //   }

// // };
// //   fetchData();
// // }, []);




// // useEffect( () => {
// //   const fetchData = async () => {
// //       try {
  
// //     //  setTimeout (async ()  =>{   
// //       const response = await fetch('https://socket-io-server-mc3e.onrender.com/api/v1/getCustomerInfo');
// //           const data = await response.json();
// //           const ovalue = data.totalOrderAvg[0].avgOrderValue;
// //                     // const uniqueVisitorCount = uniqueVisitors.length;
// //                     const ovaluecount = ovalue;
          
// //                     setOrderValue(ovaluecount);
// //                     // console.log("value", ovaluecount);
// //       // },1000 );
// //   } catch (error) {
// //       console.log(error);
// //   }

// // };
// //   fetchData();
// // }, []);





// // useEffect( () => {
// //   const fetchData = async () => {
// //       try {
  
// //     //  setTimeout (async ()  =>{   
// //       const response = await fetch('https://socket-io-server-mc3e.onrender.com/api/v1/getCustomerInfo');
// //           const data = await response.json();
// //           const cartvalue = data.cartAbandonmentCount;
// //                     // const uniqueVisitorCount = uniqueVisitors.length;
// //                     const cartvaluecount = cartvalue;
          
// //                     setCartCount(cartvaluecount);
// //                     console.log("cart value", cartvaluecount);
// //       // },1000 );
// //   } catch (error) {
// //       console.log(error);
// //   }

// // };
// //   fetchData();
// // }, []);





// //   return (
// //     <div className="App">
// //     {/* <h1>{uniqueVisitor}</h1> */}

    
    
// //     <Heading/>
// //     <Navbar/>



// //     {/* --------------------------------------------Routes-------------------------------------------------------------- */}

// //     <Routes>

// //     <Route path="/dashboard" element={
// //       // <React.Fragment>
// //       <Dashboard uniqueVisitor = {uniqueVisitor} conversionRate = {conversionRate} let orderValue = {orderValue} cartCount = {cartCount}/>
// //       // </React.Fragment>
// //     }/>

// //     <Route path="/staffdetails" element={<StaffDetails/>}/>
// //     <Route path="/logout" element={<Logout/>}/>


// //     </Routes>

// // {/* -------------------------------------------------Routes------------------------------------------------------------- */}

// //     </div>
// //   );
// // }

// // export default App;




// import React, { useState, useEffect } from 'react';
// import Dashboard from './components/Dashboard';
// import Navbar from './components/Navbar';
// import StaffDetails from './components/StaffDetails';
// import Logout from './components/Logout';
// import { Route, Routes } from 'react-router-dom';
// import Heading from './components/Heading';

// function App() {
//   const [data, setData] = useState({
//     uniqueVisitor: 0,
//     conversionRate: 0,
//     orderValue: 0,
//     cartCount: 0,
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://socket-io-server-mc3e.onrender.com/api/v1/getInfo');
//         const data = await response.json();
//         const uniqueVisitors = data.totalUniqueUsers;
//         setData((prevData) => ({ ...prevData, uniqueVisitor: uniqueVisitors }));
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://socket-io-server-mc3e.onrender.com/api/v1/getCustomerInfo');
//         const data = await response.json();
//         const crates = data.conversionRate;
//         setData((prevData) => ({ ...prevData, conversionRate: crates }));
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://socket-io-server-mc3e.onrender.com/api/v1/getCustomerInfo');
//         const data = await response.json();
//         const ovalue = data.totalOrderAvg[0].avgOrderValue;
//         setData((prevData) => ({ ...prevData, orderValue: ovalue }));
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://socket-io-server-mc3e.onrender.com/api/v1/getCustomerInfo');
//         const data = await response.json();
//         const cartvalue = data.cartAbandonmentCount;
//         setData((prevData) => ({ ...prevData, cartCount: cartvalue }));
//         console.log("cart value", cartvalue);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="App">
//       <Heading />
//       <Navbar />

//       <Routes>
//         <Route path="/dashboard" element={<Dashboard data={data} />} />
//         <Route path="/staffdetails" element={<StaffDetails />} />
//         <Route path="/logout" element={<Logout />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;




// import React, { useState, useEffect } from 'react';
// import Dashboard from './components/Dashboard';
// import Navbar from './components/Navbar';
// import StaffDetails from './components/StaffDetails';
// import Logout from './components/Logout';
// import { Route, Routes } from 'react-router-dom';
// import Heading from './components/Heading';

// function App() {
//   const [data, setData] = useState({
//     uniqueVisitor: 0,
//     conversionRate: 0,
//     orderValue: 0,
//     cartCount: 0,
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://socket-io-server-mc3e.onrender.com/api/v1/getCustomerInfo');
//         const data = await response.json();

//         setData({
//           uniqueVisitor: data.totalUniqueUsers,
//           conversionRate: data.conversionRate,
//           orderValue: data.totalOrderAvg[0].avgOrderValue,
//           cartCount: data.cartAbandonmentCount,
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="App">
//       <Heading />
//       <Navbar />

//       <Routes>
//         <Route path="/dashboard" element={<Dashboard data={data} />} />
//         <Route path="/staffdetails" element={<StaffDetails />} />
//         <Route path="/logout" element={<Logout />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;





import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import StaffDetails from './components/StaffDetails';
import Logout from './components/Logout';
import { Route, Routes } from 'react-router-dom';
import Heading from './components/Heading';

function App() {
  const [data, setData] = useState({
    uniqueVisitor: 0,
    conversionRate: 0,
    orderValue: 0,
    cartCount: 0,
    pageLoad: 0,
  });

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        // Fetch uniqueVisitor 
        const responseUnique = await fetch('https://socket-io-server-mc3e.onrender.com/api/v1/getInfo');
        const dataUnique = await responseUnique.json();
        const uniqueVisitors = dataUnique.totalUniqueUsers;
        const pageLoads = dataUnique.averagePageLoadTime[0].pageLoadTime;
        console.log("value", pageLoads)

        // Fetch conversionRate, orderValue, and cartCount 
        const responseCustomer = await fetch('https://socket-io-server-mc3e.onrender.com/api/v1/getCustomerInfo');
        const dataCustomer = await responseCustomer.json();
        const conversionRate = dataCustomer.conversionRate;
        const orderValue = dataCustomer.totalOrderAvg[0].avgOrderValue;
        const cartCount = dataCustomer.cartAbandonmentCount;

        setData({
          uniqueVisitor: uniqueVisitors,
          conversionRate: conversionRate,
          orderValue: orderValue,
          cartCount: cartCount,
          pageLoad: pageLoads,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Heading />
      <Navbar />

      <Routes>
        <Route path="/dashboard" element={<Dashboard data={data} />} />
        <Route path="/staffdetails" element={<StaffDetails />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;