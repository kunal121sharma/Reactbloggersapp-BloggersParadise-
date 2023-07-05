import React from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import useFetch from '../../useFetch';

const BlogDetails = () => {
    const{id}=useParams();
    const history=useHistory();
    const{blogs,load,error}=useFetch(' http://localhost:8000/blogs/'+id)
const clickHandler=()=>
{
    fetch(' http://localhost:8000/blogs/'+blogs.id,{
     method:'DELETE'

    })
    .then(()=>
    {
        history.push('/');
    })
}
  return (
   <div className="blog-details">
    {load && <div>Loading....</div>}
    {error && <div>{error}</div>}
    {blogs && (<article>
     <h2>{blogs.title}</h2>
     <p>Written By {blogs.author}</p>
     <div>{blogs.body}</div>
     <button onClick={clickHandler}>Delete</button>

    </article>)}




   </div>

  )
}

export default BlogDetails