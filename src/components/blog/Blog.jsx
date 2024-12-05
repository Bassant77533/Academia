import React from 'react'
import BlogCard from './BlogCard'
import Back from '../Back'
import Footer from '../Footer/Footer'
const Blog = () => {
  return (
    <div className='blog'>
        <Back title={"Blog Posts"} />
        <div className='container'>
            <div className='row'>
                <BlogCard />
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Blog
