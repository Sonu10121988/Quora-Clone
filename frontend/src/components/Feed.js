import React, {useEffect, useState} from 'react';
import QuoraBox from './QuoraBox';
import Post from './Post';
import '../css/Feed.css';
import axios from 'axios';

function Feed() {
  const [allQuestion, setAllQuestion] = useState([]);

  useEffect(()=>{
    axios.get('/api/questions').then((res)=>{
      console.log(res.data.reverse())
      setAllQuestion(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
    }, []);
  return (
    <div className='feed'>
      <QuoraBox />
      {allQuestion.map((post, index)=>(
        <Post key={index} post={post}/>
      ))}
      {/* <Post/>
      <Post/> */}
    </div>
  );
};

export default Feed;
