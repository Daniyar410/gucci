import React from 'react'
import './SaleWrap.scss'

const SaleWrap = () => {
  return (
    <>
    <section className="salewrap">
        <div className="container">
            <div className="salewrap__wrap">

                <div className="salewrap__card">
                    <h2>Casual</h2>
                </div>

                <div className="salewrap__card">
                    <h2>Formal</h2>
                </div>

                <div className="salewrap__card">
                    <h2>Party</h2>
                </div>

                <div className="salewrap__card">
                    <h2>Gym</h2>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default SaleWrap