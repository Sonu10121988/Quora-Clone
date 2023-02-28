import React, {useState} from 'react';
import '../css/Post.css';
import { Modal } from 'react-responsive-modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-responsive-modal/styles.css';
import ReactTimeAgo from "react-time-ago";
import axios from "axios";
import ReactHtmlParser from "html-react-parser";


function LastSeen({ date }) {
    return (
      <div>
        <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
      </div>
    );
  }

function Post({ post }) {
    const [upArrow,setUpArrow] = useState("black");
  const [downArrow,setDownArrow] = useState("black");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [answer, setAnswer] = useState("");
    const Close = (<i class="fa-solid fa-xmark"></i>);

    const handleQuill = (val) => {
        setAnswer(val);
      };

      const handleSubmit = async () => {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = {
          answer: answer,
          questionId: post?._id,
        };
        if (post?._id && answer !== "") {
          await axios
            .post("/api/answers", body, config)
            .then((res) => {
              console.log(res.data);
              alert("Your Answer added successfully");
              setIsModalOpen(false);
              window.location.href = "/";
            })
            .catch((error) => {
              console.log(error);
            });
        }
      };

      return (
        <div className="post">
          <div className="post_info">
            <div className="info_img">
              <img
                src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=50&q=80" '
                alt=""
              />
            </div>
            <h6 style={{marginLeft: "10px"}}>user<a href="/Follow">Follow</a></h6>
         <small><LastSeen date={post?.createdAt} /> </small>
           </div>
          <div className="post_body">
            <div className="post_question">
              <p>{post?.questionName} </p>
              <button onClick={() => setIsModalOpen(true)} className="post_answer">
                Answer
              </button>
              <Modal
                open={isModalOpen}
                closeIcon={Close}
                onClose={() => setIsModalOpen(false)}
                closeOnEsc
                center
                closeOnOverlayClick={false}
                styles={{ overlay: { height: "auto" } }}
              >
                <div className="modal_question">
                  <h1>{post?.questionName}</h1>
                  <p>
                    Asked by <span className="name_time">Username</span> on{" "}
                    <span className="name_time">
                      {new Date(post?.createdAt).toLocaleString()}
                    </span>
                  </p>
                </div>
                <div className="modal_answer">
                  <ReactQuill
                    onChange={handleQuill}
                    value={answer}
                    placeholder="Enter your answer"
                  />
                </div>
                <div className="modal_buttons">
                  <button className="cancle" onClick={() => setIsModalOpen(false)}>
                    cancel
                  </button>
                  <button type="submit" onClick={handleSubmit} className="add">
                    Add Answer
                  </button>
                </div>
              </Modal>
            </div>
            {post.questionUrl !== "" && (
              <img src={post.questionUrl} alt="questionphoto" />
            )}
            {/* <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=650&q=80" 'alt='' /> */}
          </div>
          <div className="post_footer">
            <div className="post_actions">
            <button  onClick={() => setUpArrow((prev) => prev === "black" ? "green" : "black")} >
              <i class="fa-sharp fa-solid fa-arrow-up" style={{color:upArrow}}></i>
              </button>
    
              <button  onClick={() => setDownArrow((prev) => prev === "black" ? "red" : "black")} >
              <i class="fa-solid fa-arrow-down" style={{color:downArrow}}></i>
              </button>
            </div>
            <i class="fa-regular fa-comment"></i>
            <div className="action_more">
              <button>
                <i class="fa-solid fa-ellipsis"></i>
              </button>
            </div>
          </div>
          {/* post answer */}
          <p
            style={{
              color: "rgba(0,0,0,0.5)",
              fontSize: "12px",
              fontWeight: "bold",
              margin: "10px 0",
            }}
          >
            {post?.allAnswers.length} Answer(s)
          </p>
    
          <div
            style={{
              margin: "5px 0px 0px 0px ",
              padding: "5px 0px 0px 20px",
              borderTop: "1px solid lightgray",
            }}
            className="post__answer"
          >
            {post?.allAnswers?.map((_a) => (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    padding: "10px 5px",
                    borderTop: "1px solid lightgray",
                  }}
                  className="post-answer-container"
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#888",
                    }}
                    className="post-answered"
                  >
                    
                    <div
                      style={{
                        margin: "0px 10px",
                      }}
                      className="post-info"
                    >
                      <span>
                        <LastSeen date={_a?.createdAt} />
                      </span>
                    </div>
                  </div>
                  <div className="post-answer">{ReactHtmlParser(_a?.answer)}</div>
                </div>
              </>
            ))}
          </div>
        </div>
      );
};

export default Post;
