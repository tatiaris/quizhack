import React from 'react'

function CountInfo(data) {
    if (data.state === 0) {
        return (
            <div></div>
        )
    } else {
        return (
            <div className="term_count_container">
                <span className="term_count">{data.card_count}</span> terms found from the top <span className="term_count">{data.set_count}</span> sets
            </div>
        )
    }
}

export default CountInfo