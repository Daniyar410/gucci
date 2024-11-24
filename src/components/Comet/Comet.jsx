import React from 'react'
import './Comet.scss'
import SectionTitle from '../SectionTitle/SectionTitle'
import CardCommet from '../CardCommet/CardCommet'

const Comet = () => {
    return (
        <>
        <section className="comet">
            <div className="container">
            <SectionTitle position='left' img='/left.png' image='/right.png' >OUR HAPPY CUSTOMERS</SectionTitle>

            <div className="comet__wrap">
                <CardCommet star={'⭐⭐⭐⭐⭐'}  name={'Sarah M.'} commet={'Im blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.'}/>
                <CardCommet star={'⭐⭐⭐⭐⭐'}  name={'Alex K.'} commet={'Im blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.'}/>
                <CardCommet star={'⭐⭐⭐⭐⭐'}  name={'James L.'} commet={'Im blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.'}/>
            </div>
            </div>
        </section>
        </>
    )
}

export default Comet