import React, { useState } from 'react';
import PrecisionRoll from '../PrecisionRoll/PrecisionRoll';
import TimeSeriesGraph from '../TimeSeriesGraph/TimeSeriesGraph';
import Switch from 'rc-switch';
import 'rc-switch/assets/index.css';
import './Popup.css'; 

function Popup({ shop, allShopsData }) {
  const [showAllStores, setShowAllStores] = useState(false);

  const handleFilterChange = () => {
    setShowAllStores(!showAllStores);
  };

  const allStoresCombinedData = allShopsData.reduce((combinedData, currentShop) => {
    currentShop.monthly_sales.forEach((sale, index) => {
      if (!combinedData[index]) {
        combinedData[index] = { date: sale.date, total_sales: 0 };
      }
      combinedData[index].total_sales += sale.total_sales;
    });
    return combinedData;
  }, []);
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-content">
          <div className="left-section">
            <img src={shop.shop_picture} alt="Shop" className="shop-image" />
            <h2>{shop.shop_name}</h2>
            <p>{shop.shop_adress}</p>
            <p>Manager ID: {shop.shop_manager_surname}</p>
            <p>Total Score: {shop.total_shop_score}</p>
          </div>
          <div className="right-section">
            <h2>Mean Shop Score<br/> {shop.data[0].mean_shop}</h2>
            <span className='divider'/>
            <PrecisionRoll R={shop.data[0].R} />
          </div>
        </div>
        <div className='filter-wrapper'>
        <div className="filter-section">
          <label >Show All Stores</label>
          <div className="toggle-container">
          <span>Current Store</span>
            <Switch
              checked={showAllStores}
              onChange={handleFilterChange}
            />
            <span>All Stores</span>
          </div>
        </div>
        <TimeSeriesGraph
          monthlySales={showAllStores ? allStoresCombinedData : shop.monthly_sales}
        />
        </div>
      </div>
    </div>
  );
}

export default Popup;
