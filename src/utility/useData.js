// utility/useData.js
import { useEffect, useState } from 'react';
import { fetchUniqueVisitors, fetchConversionRate, fetchOrderValue, fetchCartCount, fetchPageLoad } from './fetchData';

export function useData() {
  const [data, setData] = useState({
    uniqueVisitor: 0,
    conversionRate: 0,
    orderValue: 0,
    cartCount: 0,
    pageLoad: 0,
  });

  useEffect(() => {
    async function fetchData() {
      const uniqueVisitor = await fetchUniqueVisitors();
      const conversionRate = await fetchConversionRate();
      const orderValue = await fetchOrderValue();
      const cartCount = await fetchCartCount();
      const pageLoad = await fetchPageLoad();

      setData({
        uniqueVisitor,
        conversionRate,
        orderValue,
        cartCount,
        pageLoad,
      });
    }

    fetchData();
  }, []);

  return data;
}
