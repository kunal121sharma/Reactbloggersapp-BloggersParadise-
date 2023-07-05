import React,{useState} from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [load,setLoad]=useState(false);
 const history= useHistory();
  const submitHnadler=(e)=>{
    setLoad(true);
    e.preventDefault();
    const blog={title,body,author};
    fetch('http://localhost:8000/blogs',{
       method:'POST',
       headers:{"Content-Type":"application/json"},
       body:JSON.stringify(blog)


    })
    .then(()=>
    {
      setLoad(false);
      console.log('new blog added');
      // history.go(-1);
      history.push('/');
    })



  }
  return (
   
    <div className="create">
        <h2>Add New blog</h2>
        <form onSubmit={submitHnadler}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
       { !load && <button>Add Blog</button>} 
       { load && <button>Adding blog....</button>} 
      </form>
      
    </div>
  )
}

export default Create