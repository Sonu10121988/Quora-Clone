import React from 'react';
import Feed from './Feed';
import QuoraHeader from './QuoraHeader';
import Sidebar from './Sidebar';
import Widget from './Widget';
import '../css/Quora.css';

function Quora() {
  return (
    <div className='quora'>
      <QuoraHeader />
      <div className='quora_contents'>
        <div className='quora_content'>
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </div>
    </div>
  )
}

export default Quora;
