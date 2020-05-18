import React from 'react'
import Card from './Card';

function Cards(helper) {
    return (
        <div className="flex_container">
            {helper.cards.map((card) => (
                <Card key={card.id.toString()} prompt={card.prompt} answer={card.answer} display={card.display} search_phrase={helper.search_phrase}></Card>
            ))}
        </div>
    )
}

export default Cards
