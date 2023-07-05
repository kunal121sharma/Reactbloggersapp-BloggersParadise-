import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const NotFound = () => {
  return (
    <div className='not-found'>
     <h2>Page not found</h2>
      <div>sorry</div>
      <Link to='/'>Back to home</Link>

    </div>
  )
}

export default NotFound