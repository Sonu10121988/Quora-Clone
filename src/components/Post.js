import React, {useState} from 'react';
import '../css/Post.css';
import { Modal } from 'react-responsive-modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-responsive-modal/styles.css';

function Post() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    //const [imgLink, setImgLink] = useState("");
    const Close = (<i class="fa-solid fa-xmark"></i>);

    return (
        <div className='post'>
            <div className='post_info'>
                <div className='info_img'><img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=50&q=80' alt='avatar' /></div>
                <h4>Sonu Yadav</h4>
                <a href='#' >Follow</a>
            </div>
            <div className='post_body'>
                <div className='post_question'>
                    <p>What is the kind photo you saw today ? </p>
                    <button onClick={()=>setIsModalOpen(true)} className="post_answer">Answer</button>
                    <Modal open={isModalOpen}
                    closeIcon={Close} onClose={() => setIsModalOpen(false)}
                    closeOnEsc
                    center
                    closeOnOverlayClick={false} styles={{ overlay: { height: "auto", } }}>
                   <div className="modal_question">
                    <h1>This is test question.</h1>
                    <p>Asked by <span className="name_time">Username</span> on<span className="name_time"> timestamp</span></p>
                   </div>
                   <div className="modal_answer">
                    <ReactQuill placeholder="Enter your answer" />
                   </div>
                   <div className='modal_buttons'>
                        <button className='cancle' onClick={() => setIsModalOpen(false)}>cancel</button>
                        <button  type='submit' className='add'>Add Question</button>
                    </div>
                </Modal>
                </div>
                <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=650&q=80" ' />
            </div>
            <div className='post_footer'>
                <div className='post_actions'>
                    <i class="fa-sharp fa-solid fa-arrow-up"></i>
                    <i class="fa-solid fa-arrow-down"></i>
                </div>
                <i class="fa-regular fa-comment"></i>
                <div className='action_more'>
                    <button><i class="fa-solid fa-ellipsis"></i></button>
                </div>
            </div>
        </div>
    )
};

export default Post;
