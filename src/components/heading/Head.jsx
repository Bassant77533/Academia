

import './header.css'
const Head = ()=>{
    return (
        <div className ="head mt-4 container d-flex justify-content-between align-items-center text-light">
            <div>
                <h2>ACADEMIA</h2>
                <p>ONLINE EDUCATION & LEARNING</p>
            </div>
            <ul className="social list-unstyled d-flex gap-3">
                <li><i class="fa-brands fa-facebook-f"></i></li>
                <li><i class="fa-brands fa-twitter"></i></li>
                <li><i class="fa-brands fa-instagram"></i></li>
                <li><i class="fa-brands fa-youtube"></i></li>
            </ul>
        </div>
    )

}
export default Head ; 