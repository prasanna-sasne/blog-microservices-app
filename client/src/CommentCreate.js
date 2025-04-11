import React, { useState } from "react";
import axios from "axios";

const CreateComment = ({ postId }) => {
    const [comment, setComment] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content: comment
        });
        setComment('');
    }

    return <div>
        <form onSubmit={onSubmit}>
            <div className="form-gorup">
                <label>New Comment</label>
                <input className="form-control"
                    value={comment}
                    onChange={e => setComment(e.target.value)}>
                </input>
            </div>
            <button className="btn btn-primary mt-2">Submit</button>
        </form>
    </div>
}

export default CreateComment;