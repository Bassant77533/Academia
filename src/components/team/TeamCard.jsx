import React from 'react'
import {team} from '../../dummydata'
import './team.css'
const TeamCard = () => {
  return (
    <div className='team-card'>
        <div className='container grid'>
            {
                team.map((val)=>{
                    return(
                        <div className='team-member' >
                        <div className='team-image position-relative'>
                            <img className='w-100 h-100' src={val.cover} alt=''></img>
                            <ul className="overlay social list-unstyled d-flex flex-column gap-3 position-absolute">
                                <li><i class="fa-brands fa-facebook-f"></i></li>
                                <li><i class="fa-brands fa-twitter"></i></li>
                                <li><i class="fa-brands fa-instagram"></i></li>
                                <li><i class="fa-brands fa-youtube"></i></li>
                            </ul>
                        </div>
                        <div className='team-info p-4 text-center'>
                            <h5>{val.name}</h5>
                            <p>{val.work}</p>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default TeamCard
