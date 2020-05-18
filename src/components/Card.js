import React from 'react'

export default function Card(info) {
    // console.log(info.prompt, info.answer, info.search_phrase);
    let prompt = info.prompt
    let answer = info.answer
    let search_phrase = info.search_phrase
    try {
        if (info.display && 
            (prompt.toUpperCase().includes(search_phrase.toUpperCase()) 
            || answer.toUpperCase().includes(search_phrase.toUpperCase()))) {
                if (search_phrase !== '') {
                    let re = new RegExp(search_phrase, "gi");
                    prompt = prompt.replace(re, function (x) {
                        return `<span class="search_match">` + x + `</span>`
                    })
                    answer = answer.replace(re, function (x) {
                        return `<span class="search_match">` + x + `</span>`
                    })
                }
                return (
                    <div className="cards_container">
                        <div className="card p_card" dangerouslySetInnerHTML={{__html: prompt}}>
                        </div>
                        <div className="card a_card" dangerouslySetInnerHTML={{__html: answer}}>
                        </div>
                    </div>
                )
        } else {
            return (
                <div></div>
            )
        }
    } catch (error) {
        console.log('p:', prompt, 'a:', answer, 's:', search_phrase);
        console.log(error)
        return (
            <div></div>
        )
    }
}
