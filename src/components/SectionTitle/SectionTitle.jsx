import React from 'react'
import './SectionTitle.scss'

const SectionTitle = ({ children, position }) => {
    return (
        <>
            <h2 style={{textAlign: position}} className="section-title">{children}</h2>
        </>
    )
}

export default SectionTitle