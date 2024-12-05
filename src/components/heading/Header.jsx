import react, { useState } from 'react'; 
import Head from './Head.jsx'; 
import './header.css'
const Header = ()=>{
    const [click , setClick] = useState (false); 
    return (
        <>
            <Head/>
            <header className='container-fluid '>
                <nav className='justify-content-between   d-flex '>
                    <ul  className={` list-unstyled gap-4 px-3 m-0 ${click ?  "mobile-nav": "flexSB"}`}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/AllCourses">All Courses</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/team">Team</a></li>
                        <li><a href="/pricing">Pricing</a></li>
                        <li><a href="/blog">Journal</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <h5 className='button'>Get Certificate</h5>
                    <button className='toggler' onClick={()=>{setClick((prev)=>!prev)}}>
                        {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                    </button>
                </nav>
            </header>
        </>
        

    )

}
export default Header ; 