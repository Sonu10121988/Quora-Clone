import React from 'react';
import '../css/Widget.css';

function Widget() {
  return (
    <div className='widget'>
      <div className='widget_header'>
        <img src='https://cdn.testbook.com/products/2022/July/26/__w-200-400-600__/Full-Stack-Development-Career-Program-(6-Months)_Course-Card.jpg.jpeg' width="350" style={{marginBottom: "5px"}} alt='advertise'/>
        <img src='https://cdn.testbook.com/products/2023/February/6/__w-200-400-600__/Social%20Media%20Marketing%20for%20Beginners.png.png' width= "350" alt='advertise'/>
        <p> Advertisement</p>
      </div>
    </div>
  );
};

export default Widget;
