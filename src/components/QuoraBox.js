import React from 'react';
import '../css/QuoraBox.css';

function QuoraBox() {
  return (
    <div className='quora_box'>
      <div className='quora_info'>
        <img className='quora_person' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />

        <input type="text" placeholder='What do you want to ask or share ?' />
      </div>
      <div className='quora_reply'>
        <div className='quora_replys'><a><i class="fa-solid fa-magnifying-glass" style={{color: "black"}}></i> Ask</a></div>
        <div className='quora_replys'><a><i class="fa-regular fa-pen-to-square" style={{color: "black"}}></i> Answer</a></div>
        <div className='quora_replys'><a><i class="fa-solid fa-pencil" style={{color: "black"}}></i> Post</a></div>
      </div>
    </div>
  )
};

export default QuoraBox;

