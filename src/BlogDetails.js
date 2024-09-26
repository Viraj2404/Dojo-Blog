import {useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
const {id} = useParams();
const {data: blog, ispending, error} = useFetch('http://localhost:8000/blogs/'+id);
const history = useHistory();

const handleClick=()=>{
    fetch('http://localhost:8000/blogs/'+blog.id, {
        method:"DELETE"
    }).then(()=>{
        history.push('/');
    })
}

    return ( 
        <div className="blog-details">

            {ispending && <div>Loading.....</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <p><i>Written by</i> {blog.author}</p>
                    <p>{blog.body}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            ) }
        
        </div>
     );
}
 
export default BlogDetails;