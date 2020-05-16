import React from 'react'

export default function Card(info) {
    return (
        <div className="cards_container">
            <div className="card p_card">
                {info.prompt}
            </div>
            <div className="card a_card">
                {info.answer}
            </div>
        </div>
    )
}
