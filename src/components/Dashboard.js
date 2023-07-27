import React, { useState, useEffect } from 'react'


const Dashboard = (props) => {
  // let uniqueVisitor = props.uniqueVisitor;
  // let conversionRate = props.conversionRate
  // let orderValue = props.orderValue
  // let cartCount = props.cartCount
  // let data = props.data
  const { uniqueVisitor, conversionRate, orderValue, cartCount, pageLoad } = props.data
  
  const[showModal, setShowModal] = useState(false);
  const[showCrate, setShowCrate] = useState(false);
  const[orderValues, setOrderValue] = useState(false);
  const[acount, setACount] = useState(false);
  const[pTime, setPtime] = useState(false);
  const[uniqueQuote,setUniqueQuote]= useState("");
  const[pageTime,setPageTime]= useState("");
  // const[crateQuote,setCrateQuote]= useState("");
  
    // const Modal = () => {
    //   alert("Hi")
    //     return (
    //       <>
    //       <p>
    //         Hi
    //       </p>
    //       </>
    //     )
    // }






    useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await fetch('https://socket-io-server-mc3e.onrender.com/api/v1/getInfo');
              const data = await response.json();
               setUniqueQuote(data?.generalInfo  && data?.generalInfo[0]?.totalUniqueUsers?.info);
               setPageTime(data?.generalInfo  && data?.generalInfo[0]?.averagePageLoadTime?.info);
              // console.log("info : ", uniqueQuote)
            } catch (error) {
              console.log(error);
            }
          };
          fetchData();
        }, []);






        // useEffect(() => {
        //   const fetchData = async () => {
        //     try {
        //       const response = await fetch('https://socket-io-server-mc3e.onrender.com/api/v1/getCustomerInfo');
        //       const data = await response.json();
        //       setCrateQuote(data?.generalInfo  && data?.customerInfo[0]?.totalUniqueUsers?.info);
        //        setPageTime(data?.generalInfo  && data?.generalInfo[0]?.averagePageLoadTime?.info);
        //       // console.log("info : ", uniqueQuote)
        //     } catch (error) {
        //       console.log(error);
        //     }
        //   };
        //   fetchData();
        // }, []);




  const MyModal = () => {
    return (
      <>
        <p>
        {/* In marketing, the unique visitors’ metric measures (and counts) the number of distinct individuals visiting a page or multiple pages on your website in a given time interval – regardless of how often they requested those pages. */}
            {uniqueQuote}
        </p>
        <button onClick={() => setShowModal(false)}>Ok</button>
      </>
    );
  };






  const ShowCrates = () => {
    return (
      <>
        <p>
        A conversion is when someone carries out an action you intend them to take. The conversion rate is the percentage of users who complete such an action.
        </p>
        <button onClick={() => setShowCrate(false)}>Ok</button>
      </>
    );
  };




  const ShowOrdervalues = () => {
    return (
      <>
        <p>
            Average order value (AOV) is an e-commerce metric that tracks the average dollar amount spent whenever a customer places an order on a website or application.
        </p>
        <button onClick={() => setOrderValue(false)}>Ok</button>
      </>
    );
  };




  const AbandonmentCount = () => {
    return (
      <>
        <p>
             Cart abandonment rate shows how many of the items that are added to the shopping cart are abandoned. It is calculated with the formula: added to cart/ (added to cart+made conversions), (referring to the number of people).
        </p>
        <button onClick={() => setACount(false)}>Ok</button>
      </>
    );
  };




  const ShowPtime = () => {
    return (
      <>
        <p>
              {/* Page load time, the duration it takes for a webpage to completely load in a user's web browser, is an essential factor in website performance and user experience. The loading time includes the download and rendering of all the elements present on the page, such as images, stylesheets, scripts, and other media types. */}

              {pageTime}
        </p>
        <button onClick={() => setPtime(false)}>Ok</button>
      </>
    );
  };

   
return (
    <div style={{flexDirection:'column'}}>
      <div
        className="card text-white text-center m-3"
        style={{ width: "20rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
        <div className="card-body">
          <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>UNIQUE VISITORS</h6>
          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
            {uniqueVisitor}
          </p>
              

   {/* --------------------------------------------PopUp Modal Work------------------------------------- */}
          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03", position:"absolute", right:"4px",top:"2px"}}>
            <button onClick={() => setShowModal(true)}><i>i</i></button>
          </p>
          {/* <MyModal/> */}{showModal && <MyModal/>}

        </div>
      </div>

      <div
        className="card text-white text-center m-3"
        style={{ width: "20rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
        <div className="card-body">
          <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>CONVERSION RATE</h6>
          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
            {conversionRate} 
          </p>

          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03",  position:"absolute", right:"4px",top:"2px"  }}>
            <button onClick={() => setShowCrate(true)}><i>i</i></button>
          </p>
          {/* <MyModal/> */}{showCrate && <ShowCrates/>}

        </div>
      </div>



      <div
        className="card text-white text-center m-3"
        style={{ width: "20rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
        <div className="card-body">
          <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>ORDER VALUE</h6>
          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
          ₹ {orderValue} 
          </p>

          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03",  position:"absolute", right:"4px",top:"2px"  }}>
            <button onClick={() => setOrderValue(true)}><i>i</i></button>
          </p>
          {/* <MyModal/> */}{orderValues && <ShowOrdervalues/>}

          
        </div>
      </div>


      <div
        className="card text-white text-center m-3"
        style={{ width: "20rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
        <div className="card-body">
          <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Cart Abandonment Count</h6>
          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
            {cartCount}
          </p>


          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03",  position:"absolute", right:"4px",top:"2px"  }}>
            <button onClick={() => setACount(true)}><i>i</i></button>
          </p>
          {/* <MyModal/> */}{acount && <AbandonmentCount/>}



        </div>

</div>

<div
        className="card text-white text-center m-3"
        style={{ width: "20rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
        <div className="card-body">
          <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>PAGE LOAD TIME</h6>
          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
            {pageLoad}
          </p>

          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03",  position:"absolute", right:"4px",top:"2px"  }}>
            <button onClick={() => setPtime(true)}><i>i</i></button>
          </p>
          {/* <MyModal/> */}{pTime && <ShowPtime/>}

        </div>

</div>



    </div>
  );

   
}

export default Dashboard