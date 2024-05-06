import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './tabs.css'

const Tabs = ({items}) => {
    const [activeTab, setActiveTab] = useState(0);
  
    const handelClick = (index) =>{
      setActiveTab(index);
    }
  
    return (
      <div className='tabs-container'>
        <div className='tabs-header'>
        {items?.map((tab, index)=> (  
          <button
              key={tab.label}
              className={`tab-item ${activeTab === index ? 'tab-active' : ''}`}
              onClick={() => {
                handelClick(index)
                console.log("ssss");
              }}
            >
              {tab.label}
            </button>))}
        </div>
        <div className='tabs-body'>
          {items[activeTab]?.content}
          </div>
      </div>
    )
  }

  export default Tabs

  Tabs.propTypes = {
    items: PropTypes.array
  }