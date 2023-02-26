import React, { useState } from "react";
import "../css/QuoraHeader.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { NavLink } from "react-router-dom";

function QuoraHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgLink, setImgLink] = useState("");
  const Close = <i class="fa-solid fa-xmark"></i>;

  return (
    <div className="qHeader">
      <div className="qHeader_content">
        <NavLink to="/">
          <div className="qHeader_logo">
            <img
              src="https://learndigitaladvertising.com/wp-content/uploads/2019/05/Quora-Logo-1.jpg"
              alt="quoralogo"
            />
          </div>
        </NavLink>
        <div className="qHeader_icons">
          <div className="qHeader_icon">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? "red" : "blue"
              }
            >
              <i class="fa-solid fa-house"></i>
            </NavLink>
          </div>
          <div className="qHeader_icon">
            <NavLink
              to="/follow"
              className={({ isActive, isPending }) =>
                isActive ? "red" : "blue"
              }
            >
              <i class="fa-solid fa-list"></i>
            </NavLink>
          </div>
          <div className="qHeader_icon">
            <NavLink
              to="/answer"
              className={({ isActive, isPending }) =>
                isActive ? "red" : "blue"
              }
            >
              <i
                class="fa-regular fa-pen-to-square"
                style={{ fontSize: "xx-large", marginLeft: "0px" }}
              ></i>
            </NavLink>
          </div>
          <div className="qHeader_icon">
            <NavLink
              to="/spaces"
              className={({ isActive, isPending }) =>
                isActive ? "red" : "blue"
              }
            >
              <i class="fa-solid fa-user-group"></i>
            </NavLink>
          </div>
          <div className="qHeader_icon">
            <NavLink
              to="/notification"
              className={({ isActive, isPending }) =>
                isActive ? "red" : "blue"
              }
            >
              <i class="fa-solid fa-bell"></i>
            </NavLink>
          </div>
        </div>
        <div className="qHeader_input">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search Question" />
        </div>
        <div className="qHeader_Rem">
          <button className="btn_try">Try Quora +</button>
        </div>
        <div className="qHeader_Rem_detail">
          <div class="dropdown">
            <img
              class=" dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              src="https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg"
              alt="avatar person"
            />
            <ul class="dropdown-menu mt-2" style={{ width: "15rem" }}>
              <li class="dropdown-item">
                <i className="fa-regular fa-message mx-1"></i> message
              </li>
              <li class="dropdown-item  mt-1">
                <i class="fa-solid fa-bullhorn mx-1"></i> create Add
              </li>
              <li class="dropdown-item mt-1">
                <i class="fa-solid fa-dollar-sign  mx-1"></i> Monetization
              </li>
              <li class="dropdown-item mt-1">
                <i class="fa-solid fa-chart-simple  mx-1"></i> Your content &
                stats
              </li>
              <li class="dropdown-item mt-1">
                <i class="fa-regular fa-bookmark  mx-1"></i> Bookmarks
              </li>
              <li class="dropdown-item mt-1">
                <i class="fa-solid fa-file-pen  mx-1"></i> Drafts
              </li>
              <li class="dropdown-item mt-1">
                <i class="fa-solid fa-asterisk  mx-1"></i> Try Quora
              </li>
              <hr />
              <li class="dropdown-item">Dark mode</li>
              <li class="dropdown-item mt-1">Setting</li>
              <li class="dropdown-item mt-1">Help</li>
              <li class="dropdown-item ">Logout</li>
              <hr />
              <li className="mx-2">About -Careers -Terms -Privacy</li>
            </ul>
          </div>
        </div>

        <div className="qHeader_Rem">
          <i class="fa-solid fa-globe"></i>
        </div>

        <button className="btn_question" onClick={() => setIsModalOpen(true)}>
          Add Question <i class="fa-solid fa-caret-down"></i>
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
          <div className="modal_title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal_info">
            <img
              className="quora_person"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt="avatar"
            />
            <div className="modal_scope">
              <i class="fa-solid fa-user-group"></i>
              <p style={{marginTop: "10px"}}>Public</p>
              <i class="fa-solid fa-caret-down"></i>
            </div>
          </div>
          <div className="modal_field">
            <input
              type="text"
              placeholder='Start your question with "What","How","Why",etc.'
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <input
                type="text"
                style={{
                  margin: "5px",
                  border: "1px solid lightgray",
                  padding: "10px",
                  outline: "1px solid black",
                }}
                placeholder="Image Link that gives context"
                value={imgLink}
                onChange={(event) => setImgLink(event.target.value)}
              />
            </div>
            {imgLink !== "" && (
              <img src={imgLink} className="question_img" alt="question" />
            )}
          </div>
          <div className="modal_buttons">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              cancel
            </button>
            <button type="submit" className="add">
              Add Question
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default QuoraHeader;
