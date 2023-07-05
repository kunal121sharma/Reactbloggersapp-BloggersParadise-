import { useEffect,useState } from "react";


const useFetch=(url)=>
{  const [blogs,setBlogs]=useState(null);
    const [load,setLoad]=useState(true);
    const [error,setError]=useState(null);
    
    
    
    useEffect(()=>
    {
        const abortcont= new AbortController();
     setTimeout(()=>
     {
      fetch(url,{signal:abortcont.signal})
      .then(res=>
        {
          if(!res.ok)
          {
            throw Error('not proper endpoint or url')
          }
          return res.json();
        })
       .then((data)=>
       {
        console.log(data);
        setBlogs(data);
        setLoad(false);
       })
       .catch((err)=>
       {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        }
        else{
            setError(err.message);
            setLoad(false);
          
        }
    })
    
    
     },1000);
     return ()=>abortcont.abort();
    
    },[url]);
    return {blogs,load,error};




}
export default useFetch;