import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { animatePost } from '../animation/animatePost';
import { POST_ANIMATION_TARGET_CONTAINER } from '../static/constant';
import "../styles/component/Post.scss";

const Post = () => {
    const [input, setInput] = useState('');
    const [isSubmitButtonDisable, setIsSubmitButtonDisable] = useState(false);
    const handleInputChange = (e) => {
        setInput(e.target.value);
    }
    const submitClick = () => {
        console.log('submitClick');
        if (input.length == 0) {
            setInput("Here it's you'r name");
        } else {
            setIsSubmitButtonDisable(true);
            animatePost("Post__animated_post_text_container", input, POST_ANIMATION_TARGET_CONTAINER);
        }
    }
    return <div className="Post__container">
        <div className="Post__header">
            <div className="Post__header_input">
                <div id="Post__animated_post_text_container"></div>
                <Form.Control id="post_field" value={input} onChange={handleInputChange} type="text" placeholder="please write something" />
            </div>
            <div>
                <Button onClick={submitClick} variant="success" disabled={isSubmitButtonDisable}>Submit</Button>
            </div>
        </div>
        <div className="Post__body">
            <div id={POST_ANIMATION_TARGET_CONTAINER} className="post_animTargetContainer" style={{ marginTop: '10px' }}></div>
        </div>
    </div>
}

export default Post;