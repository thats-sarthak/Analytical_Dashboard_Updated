import React from 'react'


const Dashboard = (props) => {
    // let uniqueVisitor = props.uniqueVisitor;
    // let conversionRate = props.conversionRate
    // let orderValue = props.orderValue
    // let cartCount = props.cartCount
    // let data = props.data
    const { uniqueVisitor, conversionRate, orderValue, cartCount, pageLoad } = props.data
return (
    <div>
      <div
        className="card text-white text-center m-3"
        style={{ width: "20rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
        <div className="card-body">
          <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>UNIQUE VISITORS</h6>
          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
            {uniqueVisitor}
          </p>
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
        </div>
      </div>



      <div
        className="card text-white text-center m-3"
        style={{ width: "20rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
        <div className="card-body">
          <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>ORDER VALUE</h6>
          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
            {orderValue}
          </p>
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
        </div>

</div>



    </div>
  );

   
}

export default Dashboard