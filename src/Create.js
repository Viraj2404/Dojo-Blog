import { useState } from "react";
import {useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const[ispending, setIspending]=useState(true);
    const history = useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title, body, author};

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
        setIspending(false)
      console.log('new blog added');
      history.push('/');
    })

    }

    return ( 
        <div className="create">
          <form onSubmit={handleSubmit}>
            <label>Blog Title: </label>
            <input 
                type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
            <label>Blog body: </label>
            <textarea 
            required
            value={body}
            onChange={(e)=>setBody(e.target.value)}
            ></textarea>
            <label>Blog Author</label>
            <select
                required
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
            >
                <option value="mario">Mario</option>
                <option value="yoshi">Yoshi</option>
            </select>
            {!ispending && <button>Add Blog</button>}
            {ispending && <button>Adding Blog</button>}
          </form>
        </div>
     );
}
 
export default Create;