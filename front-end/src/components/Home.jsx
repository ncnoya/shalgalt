import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <Link to='/login' className='btn btn-default border w-30 bg-light rounded-0 text-decoration-none'>Login</Link>
      <Link to='/register' className='btn btn-default border w-30 bg-light rounded-0 text-decoration-none'>Register</Link>
    </div>
  )
}

export default Home
