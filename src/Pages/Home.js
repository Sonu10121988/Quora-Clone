import React from "react";
import Sidebar from '../components/Sidebar';
import Widget from '../components/Widget';
import Feed from '../components/Feed';

let Home = () => {
  return (
    <>
      <div className="quora_contents">
        <div className="quora_content">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </div>
    </>
  );
};

export default Home;
