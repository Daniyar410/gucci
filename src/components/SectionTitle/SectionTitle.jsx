import React from 'react'
import './SectionTitle.scss'

const SectionTitle = ({ children, position, img, image }) => {
    return (
        <>
            <div className="section__img">
            <h2 style={{textAlign: position}} className="section-title">{children}</h2>

            <div>
            <img src={img} alt="" />
            <img src={image} alt="" />
            </div>
            
            </div>
        </>
    )
}

export default SectionTitle