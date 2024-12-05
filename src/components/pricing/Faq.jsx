import React from 'react'
import './price.css'
import { faq } from '../../dummydata'
import Title from '../Title'
const Faq = () => {
  return (
    <div className='faq my-5 py-5 container'>
        <Title mainHeading={"FAQS"} description={"Frequesntly Ask Question"}/>
       
        {
            faq.map((val, index) => { 
    return (
        <div className="accordion accordion-flush my-3 shadow-sm" id="accordionFlushExample" key={index}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button 
                        className="accordion-button collapsed" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={`#flush-collapse${index}`} 
                        aria-expanded="false" 
                        aria-controls={`flush-collapse${index}`}>
                        {val.title}
                    </button>
                </h2>
                <div 
                    id={`flush-collapse${index}`} 
                    className="accordion-collapse collapse" 
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">{val.desc}</div>
                </div>
            </div>
        </div>
    );
})
        }
        </div>
    )
}

export default Faq
