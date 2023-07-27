// utility/fetchData.js
export const fetchUniqueVisitors = async () => {
    try {
      const response = await fetch('https://socket-io-server-mc3e.onrender.com/api/v1/getInfo');
    //   endpoint - getInfo
    //   baseurl - except 
      const data = await response.json();
      return data?.generalInfo && data.generalInfo[0]?.totalUniqueUsers?.value;
    } catch (error) {
      console.log(error);
      return 0;
    }

  };
  
    export const fetchConversionRate = async () => {
    try {
      const response = await fetch('https://socket-io-server-mc3e.onrender.com/api/v1/getCustomerInfo');
      const data = await response.json();
      return data?.customerInfo && data.customerInfo[0]?.conversionRate;
    } catch (error) {
      console.log(error);
      return 0;
    }
  };
  
  export const fetchOrderValue = async () => {
    try {
      const response = await fetch('https://socket-io-server-mc3e.onrender.com/api/v1/getCustomerInfo');
      const data = await response.json();
      return data?.customerInfo && data.customerInfo[0]?.avgOrderValue;
    } catch (error) {
      console.log(error);
      return 0;
    }
  };
  
  export const fetchCartCount = async () => {
    try {
      const response = await fetch('https://socket-io-server-mc3e.onrender.com/api/v1/getCustomerInfo');
      const data = await response.json();
      return data?.customerInfo && data.customerInfo[0]?.cartAbandonmentCount;
    } catch (error) {
      console.log(error);
      return 0;
    }
  };
  
  export const fetchPageLoad = async () => {
    try {
      const response = await fetch('https://socket-io-server-mc3e.onrender.com/api/v1/getInfo');
      const data = await response.json();
      return data?.generalInfo && data.generalInfo[0]?.averagePageLoadTime?.value;
    } catch (error) {
      console.log(error);
      return 0;
    }
  };
  