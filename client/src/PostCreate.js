import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
    const [title, setTitle] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:4000/posts', {
            title
        });
        setTitle('');
    }

    return <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Title</label>
                <input className="form-control" value={title} onChange={e => setTitle(e.target.value)}></input>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>;
}

export default CreatePost;