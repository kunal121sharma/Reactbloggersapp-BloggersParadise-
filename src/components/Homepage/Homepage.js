import BlogList from '../BlogList/BlogList'
import useFetch from '../../useFetch'

const Homepage = () => {
  
  const {blogs,load,error}=useFetch('http://localhost:8000/blogs');

  return (
    <div className="home" >
      {error && <div>{error}</div>}
    {load && <div>Loading...</div>}
     {blogs && <BlogList blogs={blogs} title="All blogs ..." />
}

        
    </div>
    
    
  )
}

export default Homepage