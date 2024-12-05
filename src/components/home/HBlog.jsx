import React from 'react'
import Title from '../Title'
import { blog } from '../../dummydata'
const HBlog = () => {
  return (
    <div>
       <div className='blog'>
        <Title mainHeading={"OUR BLOG"} description={"Recent From Blog"}/>
        <div className='container'>
            <div className='row'>
            {
            blog.slice(0,3).map((val)=>{
                return(
                    <div className='col-lg-4 col-sm-6 p-4'>
                        <div className='item shadow-sm'>
                            <img className='img-fluid' src={val.cover} alt=''></img>
                            <ul className='my-3 content d-flex justify-content-evenly list-unstyled text-uppercase'>
                                <li  className='text-black-50'><i class="me-2 fa-solid fa-user"></i>{val.type}</li>
                                <li className='text-black-50'><i class="me-2 fa-solid fa-calendar-days"></i>{val.date}</li>
                                <li><i class="me-2 fa-solid fa-comment"></i>{val.com}</li>
                            </ul>
                            <div className='text p-3'>
                                <h5>{val.title}</h5>
                                <p className='  lh-lg text-black-50'>{val.desc}</p>
                            </div>
                        </div>
                    </div>
                )
                }
            )
        }
            </div>
        </div>
    </div>
    </div>
  )
}

export default HBlog
