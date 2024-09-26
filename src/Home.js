import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {


    const[name, setName] = useState("Adolf Hitler")
    const{data: blogs, ispending, error} = useFetch('http://localhost:8000/blogs');
  

//    const handleDelete=(id)=>{
//     const newBlogs= blogs.filter(blog=>blog.id!==id);
//     setBlogs(newBlogs);
//    }


        

    return ( 
        <div className="home">    

            {error && <div>{ error}</div>}

            {ispending && <div>...Loading</div>}
           
           { blogs && <Bloglist blogs={blogs} title="All Blogs" />}
            {/* <Bloglist blogs={blogs.filter((blog)=>blog.author==='mario')} title="Mario's Blogs" handleDelete={handleDelete}/> */}
            <button onClick={()=>setName("Benito Mussolini")}>Change Name</button>
            <p>{name}</p>
          
        </div>
        
        
     );
}


 
export default Home;