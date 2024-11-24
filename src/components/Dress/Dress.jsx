import React from 'react'
import './Dress.scss'

const Dress = () => {
    return (
        <>
            <section className="dress">
                <div className="container">
                    <h1>BROWSE BY dress STYLE</h1>
                    <div className="dress__wrap">
                        <img className='card-1' src="/casual.png" alt="" />
                        <img className='card-2' src="/formal.png" alt="" />
                        <img className='card-3' src="/party.png" alt="" />
                        <img className='card-4' src="/gym.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dress