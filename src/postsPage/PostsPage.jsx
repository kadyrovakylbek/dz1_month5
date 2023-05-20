import React, {useEffect, useState} from 'react';
import axios from "axios";

const PostsPage = () => {
    const [postList, setPostList] = useState([])
    const [input, setInput] = useState('')

    const sendPost = () => {

        const post = {
            userId: 1,
            body: input,
            title: input
        }

        const data = axios.post('https://jsonplaceholder.typicode.com/posts', post)
            .then(res => setPostList([...postList, res.data]))

        setInput('')

        console.log(data)
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setPostList(res.data))
    },[])
    return (
        <div>
            <h2>PostsPage</h2>
            <div>
                <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                <button onClick={sendPost}>click</button>
            </div>
            <ul>
                {
                    postList.map(i => <li key={i.body}>{i.title}</li>)
                }
            </ul>
        </div>
    );
};

export default PostsPage;