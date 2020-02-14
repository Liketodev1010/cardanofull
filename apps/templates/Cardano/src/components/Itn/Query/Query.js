import React from 'react'
import './Query.scss'

const Query = () => {

    return (
        <section className = "Query">
            <div className = "Query-Cont">
                <h1 >New Query   </h1>
                <p>Check all pools your account delegating to.</p>
                <div className = "Query-Cont-Flex">
                    <input placeholder = "Enter your address"/>
                    <button>Submit</button>
                </div>
            </div>
            
        </section>
    )
}

export default Query